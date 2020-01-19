<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities=cities :hot=hotCities :letter="letter"></city-list>
    <city-aphabet :cities="cities" @change="handleLetterChange"></city-aphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAphabet from './components/Aphabet'
import axios from 'axios'

export default {
  name:'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAphabet
  },
  data () {
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter=letter
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .city
    touch-action none
  
</style>