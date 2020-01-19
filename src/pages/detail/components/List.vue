<template>
  <ul>
    <li class="item" v-for="(item,index) of list" 
        :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        <span class="item-title-word">{{item.title}}</span>
      </div> 
    <div  v-if="item.children" class="item-children">
      <detail-list :list="item.children"></detail-list>
    </div>
    </li>
  </ul>
</template>

<script>
export default {
  name:'DetailList',
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
  .item-title-icon
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title 
    display flex
    align-items center
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .4rem
</style>