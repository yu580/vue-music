import Vue from "vue"
import Router from "vue-router"
// import rank from "components/rank/rank"
// import singer from "components/singer/singer"
// import search from "components/search/search"
// import recommend from "components/recommend/recommend"
// import singerDetail from "components/singer-detail/singer-detail"
// import Disc from "components/disc/disc"
// import TopList from "components/top-list/top-list";
// import UserCenter from "components/user-center/user-center";
Vue.use(Router)

const recommend = (resolve) => {
  import("components/recommend/recommend").then((module) => {
    resolve(module)
  })
}

const singer = (resolve) => {
  import("components/singer/singer").then((module) => {
    resolve(module)
  })
}

const rank = (resolve) => {
  import("components/rank/rank").then((module) => {
    resolve(module)
  })
}

const search = (resolve) => {
  import("components/search/search").then((module) => {
    resolve(module)
  })
}

const singerDetail = (resolve) => {
  import("components/singer-detail/singer-detail").then((module) => {
    resolve(module)
  })
}

const Disc = (resolve) => {
  import("components/disc/disc").then((module) => {
    resolve(module)
  })
}

const TopList = (resolve) => {
  import("components/top-list/top-list").then((module) => {
    resolve(module)
  })
}

const UserCenter = (resolve) => {
  import("components/user-center/user-center").then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: recommend,
      children: [
        {
          path: ":id",
          component: Disc
        }
      ]
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
      component: rank,
      children: [
        {
          path: ":id",
          component: TopList
        }
      ]
    },
    {
      path: "/search",
      component: search,
      children: [
        {
          path: ":id",
          component: singerDetail
        }
      ]
    },
    {
      path: "/user",
      component: UserCenter
    }
  ]
})
