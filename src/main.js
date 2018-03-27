import "babel-polyfill"
import Vue from "vue"
import App from "./App"
import router from "./router"
import VueLazyload from "vue-lazyload"
import fastclick from "fastclick"

import "common/stylus/index.styl"
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require("common/image/default.png")
})
// fastclick注册到body上   推荐写法
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router
})
