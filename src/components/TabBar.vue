<template>
    <footer>
        <ul>
            <router-link tag="li" :to="item.path" active-class="active" v-for="item in tabbars" :key="item.id">
                <i class="fas" :class="[item.icon]"></i>
                <span> {{ item.text }} </span>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            tabbars:[
                {
                    id:1,
                    icon:'fa-film',
                    text:'电影',
                    path:'/home'
                },
                {
                    id:2,
                    icon:'fa-place-of-worship',
                    text:'影院',
                    path:'/ciname'
                },
                {
                    id:3,
                    icon:'fa-user',
                    text:'我的',
                    path:'/mine'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/border.styl';

footer 
    height .485rem
    border 1px 0 0 0,#ccc
    ul
        margin 0
        padding 0
        display flex
        justify-content space-around
        align-items center
        height 100%
        li
            display flex
            flex 1
            height 100%
            flex-direction column
            justify-content center
            align-items center
            &.active
                i 
                    color #f03d37
                span 
                    color #f03d37
            i
                font-size .25rem
                color #696969
            span 
                font-size .1rem
                color #696969

</style>