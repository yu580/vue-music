<template>
  <div class="m-header">
      <div class="icom"></div>
      <h1 class="text">Chicken music</h1>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
    @import '~common/stylus/mixin'
    @import '~common/stylus/variable'
    
    .m-header
        position relative
        height 44px
        color $color-theme
        font-size 0
        .icon
            display inline-block
            vertical-align top 
            margin-top 6px
            width 30px
            height 32px
            bg-image('logo')
            background-size 30px 32px
        .text
            display inline-block
            vertical-align top 
            font-size $font-size-large


</style>


