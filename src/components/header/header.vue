<template>
  <div class="m-header">
      <div class="icon"></div>
      <h1 class="text">Chicken music</h1>
      <router-link tag="div" class="mine" to="/user">
        <i class="icon-mine"></i>
      </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.m-header {
  position: relative;
  height: 44px;
  color: $color-theme;
  font-size: 0;
  text-align: center;
  line-height: 44px;

  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    bg-image('logo');
    background-size: 30px 32px;
  }

  .text {
    display: inline-block;
    vertical-align: top;
    font-size: $font-size-large;
  }

  .mine {
    position: absolute;
    top: 0;
    right: 0;

    .icon-mine {
      display: block;
      padding: 12px;
      font-size: 20px;
      color: $color-theme;
    }
  }
}
</style>


