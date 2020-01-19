<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>



<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "HomeHeader",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed:{
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  height:$headerHeight
  display:flex
  line-height :$headerHeight
  background:$bgColor
  align-items :center
  color:#fff
  .header-left
    flex-basis :.64rem
    .back-icon
      text-align :center
      font-size :.4rem
  .header-input
    flex:1
    height :.64rem
    line-height :.64rem
    margin-left :.2rem
    margin-right :.2rem
    padding-left :.2rem
    background :#fff
    border-radius :.1rem
    color:#ccc
  .header-right
    flex-basis :1.24rem
    text-align :center
    color #fff
    .arrow-icon
      margin-left :.04rem
      font-size :.24rem
    
</style>
