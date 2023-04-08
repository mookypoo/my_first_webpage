import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/BasicInfo.vue';
import Playground from '../components/playground/Playground.vue';
import PopUpStores from '@/components/popup_stores/PopUpStores.vue';

const routes = [
   { path: '/', name: 'Home', component: Home, beforeEnter: requireAuth, isSelected: false },
   { path: '/playground', name: 'Playground', component: Playground, beforeEnter: requireAuth, isSelected: false},
   { path: '/popup_stores', name: 'PopUpStores', component: PopUpStores, beforeEnter: requireAuth, isSelected: false},
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export const changeTab = (path) => {
    const index = routes.findIndex((route) => route.path == path)
    router.push(routes[index])
}

function requireAuth(_, __, next) {
    //console.log("require auth")
    //const { $cookies }  = router.app.config.globalProperties
    //console.log(router.route)
    //console.log(router.app.config.globalProperties.$route)


    //console.log(this.$cookies.isKey("_ga"))

    //console.log(cookies.config = myCookieeeConfig)
   
    //console.log('_ga', $cookies.get('_ga'))
    next()
}

export default router

