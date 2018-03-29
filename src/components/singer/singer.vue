<template>
  <div class="singer">
    歌手页面
  </div>
</template>
<script>
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
import Singer from "common/js/singer";

const HOT_NAME = "热门";
const HOT_SINGER_LEN = 10;

export default {
  data() {
    return {
      singers: []
    };
  },
  mounted() {},
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          console.log(this._normalizeSinger(res.data.list));
        }
      });
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fother_name
            })
          );
        }
        const key = item["Findex"];
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fother_name
          })
        );
      });
      // 为了得到有序列表  我们需要处理map
      let hot = [];
      let re = [];
      for (var key in map) {
        let val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          re.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      re.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(re)
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>