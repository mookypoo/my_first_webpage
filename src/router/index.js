import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/BasicInfo.vue';
import Playground from '../components/playground/Playground.vue';
import PopUpStores from '@/components/popup_stores/PopUpStores.vue';
import AboutMe from '../components/about_me/AboutMe.vue';
import Contact from '../components/contact/Contact.vue';
import Account from '../components/account/Auth.vue';
import LogIn from '../components/account/LogIn.vue';
import SignUp from '../components/account/SignUp.vue';

/*
const routes = [
  // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
*/

const routes = [
   { path: '/', name: 'Home', component: Home, beforeEnter: requireAuth},
   { path: '/playground', name: 'Playground', component: Playground, beforeEnter: requireAuth,},
   { path: '/popup_stores', name: 'PopUpStores', component: PopUpStores, beforeEnter: requireAuth},
   { path: '/about_me/:section', name: 'AboutMe', component: AboutMe, beforeEnter: requireAuth, },
   { path: '/contact', name: 'Contact', component: Contact, beforeEnter: requireAuth, },
   { 
        path: '/account', name: 'Account', component: Account, beforeEnter: requireAuth, 
        children: [
            { path: 'log_in', component: LogIn },
            { path: 'sign_up', component: SignUp }
        ]
    },
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

