<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
<script>
import MusicList from "components/music-list/music-list";
import { mapGetters } from "vuex";
import { getSingerDetail, getSongAddressKey } from "api/singer";
import { createSong } from "common/js/song";
import { ERR_OK } from "api/config";

export default {
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
    ...mapGetters(["singer"])
  },
  created() {
    this.key = "";
    this._getDetail();
  },
  data() {
    return {
      songs: []
    };
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      }

      getSingerDetail(this.singer.id).then(res => {
        let list = res.data.list;
        this.songs = this._normalizeSongs(list);
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          getSongAddressKey(musicData.songmid).then(res => {
            if (res.code === ERR_OK) {
              let songkey = res.data.items[0].vkey;
              ret.push(createSong(musicData, songkey));
            }
          });
        }
      });
      return ret;
    }
  },
  components: {
    MusicList
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable';

.singer-detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-background;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>


