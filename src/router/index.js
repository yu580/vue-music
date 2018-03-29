import Vue from "vue"
import Router from "vue-router"
import rank from "components/rank/rank"
import singer from "components/singer/singer"
import search from "components/search/search"
import recommend from "components/recommend/recommend"
import singerDetail from "components/singer-detail/singer-detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: recommend
    },
    {
      path: "/singer",
      component: singer,
      children: [
        {
          path: ":id",
          component: singerDetail
        }
      ]
    },
    {
      path: "/rank",
      component: rank
    },
    {
      path: "/search",
      component: search
    }
  ]
})
