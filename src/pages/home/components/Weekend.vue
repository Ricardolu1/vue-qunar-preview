<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWeekend',
  components: {

  },
  props:{
    list:Array
  },
  data () {
    return {
    }
  },
  methods: {

  },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    height 37.8vw
    .item-img
      width 100%
  .item-info
    padding  .14rem .2rem .2rem .2rem 
    .item-title
      ellipsis()
      line-height .54rem
      font-size .32rem
    .item-desc
      ellipsis()
      line-height .4rem
      color #ccc


</style>