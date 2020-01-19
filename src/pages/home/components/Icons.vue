<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for = "(page,index) of pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item of page" :key="item.id">
            <img class="icon-img" :src="item.imgUrl" alt="">
            <p class="keywords">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  components: {

  },
  props:{
    list:Array
  },
  data () {
    return {
      swiperOption:{
        autoplay:false
      }
    }
  },
  computed:{
    pages(){
      const pages = []
      this.list.forEach((item,index)=>{
        const page=Math.floor(index/8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {

  }
}
</script>

<style  lang="stylus"scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .wrapper
    margin-top .1rem
    .icons 
      height 50vw
      display flex
      flex-wrap wrap
      .icon 
        height 25vw
        width 25%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .icon-img 
          height 55px
          width 55px
        .keywords
          color $darkTextColor
          font-size .28rem
          margin-top .1rem
          text-align center
          width 100%
          ellipsis()
      
        




    

</style>