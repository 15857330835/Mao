<template>
    <div class="home">
        <home-nav></home-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import HomeNav from './HomeNav'
export default {
    components:{
        HomeNav
    }
}
</script>

<style lang="stylus" scoped>
.home
    flex 1
    overflow hidden
    display flex
    flex-direction column
</style>