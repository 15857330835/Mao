<template>
    <div>
        <ul>
            <router-link to="/city" tag="li" class="city">
                <span>杭州</span>
                <i class="fas fa-caret-down"></i>
            </router-link>
            <li class="nav">
                <router-link :to="{name:'HomeHot'}" active-class="active">正在热映</router-link>
                <router-link :to="{name:'HomeComing'}" active-class="active">即将上映</router-link>
            </li>
            <router-link to="/search" tag="li" class="search">
                <i class="fas fa-search"></i>
            </router-link>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/css/border.styl';
    ul
        display flex
        height .44rem
        margin 0
        padding 0
        border 0 0 1px 0,#ccc
        .city
            flex 2
            display flex
            justify-content center
            align-items center
            span 
                font-size .15rem
                color #666
            i 
                font-size .15rem
                color #666
        .nav
            flex 6
            display flex
            justify-content space-around
            align-items center
            a 
                font-size .15rem
                font-weight bold
                color #666
                height .44rem
                line-height .44rem
                padding 0 .15rem
                text-decoration none
                &.active
                    color #ef4238
                    border 0 0 5px 0,#ef4238
        .search
            flex 2
            display flex
            justify-content center
            align-items center
            i 
                font-size .14rem
                color #ef4238

</style>