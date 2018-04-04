
const express = require("express")
const app = express()
const apiRouters = express.Router()

const config = require('./config/prod.env.js')
const axios = require('axios')

var port = process.env.PORT || config.port

app.use('/api', apiRouters)

apiRouters.get('/getDiscList', (req, res) => {
  axios.get('https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg', {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com',
      authority: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
apiRouters.get('/getSongAddressKey', (req, res) => {
  axios.get('https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg', {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com',
      authority: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
apiRouters.get('/lyric', function (req, res) {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})
apiRouters.get('/getDescSongList', (req, res) => {
  axios.get('https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg', {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com',
      authority: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})