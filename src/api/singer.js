import jsonp from "common/js/jsonp"
import { commonParams, options } from "./config"
import axios from "axios"

export function getSingerList() {
  const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg"

  const data = Object.assign({}, commonParams, {
    channel: "singer",
    page: "list",
    key: "all_all_all",
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    platform: "yqq",
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg"

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: "yqq",
    order: "listen",
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}

export function getSongAddressKey(songmid) {
  const url = "/api/getSongAddressKey"

  const data = Object.assign({}, commonParams, {
    platform: "yqq",
    hostUin: 0,
    needNewCode: 0,
    format: "jsonp",
    picmid: 1,
    loginUin: 0,
    cid: 205361747,
    uin: 0,
    songmid: songmid,
    filename: "C400" + songmid + ".m4a",
    guid: 74834180
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// callback: MusicJsonCallback47792785716298036,
