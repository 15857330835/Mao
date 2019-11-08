<template>
    <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">

        <div v-if = "movies">
          <home-item :data = "item" v-for = "item in movies.movieList" :key = "item.id"></home-item>
        </div>
      
        
      </div>
    </div>
    <Loading v-if="loading_flag"></Loading>
  </div>
</template>

<script>
import HomeItem from './HomeItem'
import BScroll from 'better-scroll'
import { mapState,mapActions, mapMutations } from 'vuex'
import _ from 'lodash'
import { Toast } from 'mint-ui'

export default {
    components:{
        HomeItem
    },
    data(){
      return{
        data:null
      }
    },
    mounted(){    
        this.getMovies() 
        let count = 0
        const bs = new BScroll('.page',{
          pullUpLoad:{
            threshold:30
          }
        })


        bs.on('pullingUp',() => {
          const movieIds = this.movies.movieIds.splice(12)
          if(this.data==null){
            this.data=movieIds
          }
          const Ids = _.chunk(this.data,10)
          if(count==Ids.length){
            Toast({
              message: '已经没有更多电影了',
              position: 'bottom',
              duration: 2000
            });
            bs.finishPullUp()
            return
          }

          if(count<Ids.length){
            this.openLoading()
            this.getComingMovies(Ids[count].join(','))
            setTimeout(()=>{
              this.closeLoading()
            },2000)
          }

          bs.finishPullUp()
          count++
        })
    },
    methods: {
        ...mapActions(['getMovies','getComingMovies','openLoading','closeLoading']),
    },
    computed:{
        movies(){
            return this.$store.state.home.movies && this.$store.state.home.movies
        },
        ...mapState({
          loading_flag:state => state.home.loading_flag
        })
    }
}
</script>

<style lang="stylus" scoped>
.tab-content
    height 100%
    display flex
    overflow hidden
    .page
        height 100%
</style>