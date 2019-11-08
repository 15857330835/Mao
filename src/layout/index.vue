<template>
    <div class="container">
        <Tab></Tab>
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Tab from '../components/Tab'
import TabBar from '../components/TabBar'

export default {
    components:{
        Tab,
        TabBar
    }
    
}
</script>

<style lang="stylus" scoped>
.container
    display flex
    flex-direction column
    height 100%
</style>