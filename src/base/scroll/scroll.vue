<template>
  <div ref="wrapper" class="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });
    },
    disable() {
      // 禁用 better-scroll，DOM 事件（如 touchstart、touchmove、touchend）的回调函数不再响应
      this.scroll && this.scroll.disable();
    },
    enable() {
      // 启用 better-scroll, 默认 开启
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>