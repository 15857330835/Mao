import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home'
import Ciname from '../views/ciname'
import Mine from '../views/mine'
import Error from '../views/error'
import City from '../views/city'
import Search from '../views/search'
import HomeHot from '../views/home/HomeHot.vue'
import HomeComing from '../views/home/HomeComing.vue'




Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            redirect:'/home/HomeHot',
            children:[
                {
                    path:'HomeHot',
                    component:HomeHot,
                    name:'HomeHot'
                },
                {
                    path:'HomeComing',
                    component:HomeComing,
                    name:'HomeComing'
                }
            ]
        },
        {
            path:'/ciname',
            component:Ciname
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'*',
            component:Error
        }
    ]
})

export default router