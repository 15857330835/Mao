import axios from 'axios'
const GETMOVIES = 'GETMOVIES'
const GETCOMINGMOVIES='GETCOMINGMOVIES'
const OPENLOADING='OPENLOADING'
const CLOSELOADING='CLOSELOADING'

export default{
    state:{
        movies:null,
        loading_flag:false
    },
    actions:{
        getMovies({commit}){
            axios({
                url:'/ajax/movieOnInfoList',
                params:{
                    token: ''
                }
            }).then(res=>{
                commit({
                    type:GETMOVIES,
                    payload:res.data
                })
            })
        },
        getComingMovies({commit},movieIds){
            axios({
                url:'/ajax/moreComingList',
                params:{
                    token: '',
                    movieIds
                }
            }).then(res=>{
                commit({
                    type:GETCOMINGMOVIES,
                    payload:res.data
                })
            })
        },
        openLoading({commit}){
            commit({
                type:OPENLOADING
            })
        },
        closeLoading({commit}){
            commit({
                type:CLOSELOADING
            })
        }
    },
    mutations:{
        GETMOVIES(state,action){
            state.movies = action.payload
        },
        GETCOMINGMOVIES(state,action){
            state.movies.movieList.push(...action.payload.coming)
        },
        OPENLOADING(state){
            state.loading_flag=true
        },
        CLOSELOADING(state){
            state.loading_flag=false
        }
    }
}