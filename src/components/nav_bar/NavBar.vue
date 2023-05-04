<template>
    <div id="navigation-bar">
        <router-link to="/" id="home">
            <button class="main-menu home" >
                김혜수
            </button>
        </router-link>
        <div id="menus"> 
            <router-link to="/about_me/background">
                <button class="main-menu" :class="isCurrentRoute('about_me')">
                    About Me
                </button>
            </router-link>
            <div class="nav-button">
                <button class="main-menu" :class="isCurrentRoute('playground')">
                    Playground<i class="fa-solid fa-angle-down"></i>
                </button>
                <div class="sub-menu-list hidden">
                    <router-link class="sub-menu-button" to="/playground#change-image" > Change Image </router-link>
                    <router-link class="sub-menu-button" to="/playground#quiz" > Quiz </router-link>
                    <!-- <router-link class="sub-menu-button" to="/about_me/experience" > Experience </router-link> -->
                </div>
            </div>
            <router-link to="/popup_stores">
                <button class="main-menu" :class="isCurrentRoute('popup_stores')">
                    팝업스토어
                </button>
            </router-link>
            <router-link to="/contact">
                <button class="main-menu" :class="isCurrentRoute('contact')">
                    Contact
                </button>
            </router-link>
            <router-link to="/account/sign_up" > 
                <button class="main-menu">
                    Sign Up
                </button>
            </router-link>
        </div>
    </div>
    
</template>


<script>
import router from '@/router';


export default {
    name: "navigation bar",
    methods: {
        isCurrentRoute(path){
            const _currentPath = router.currentRoute.value.path;
            const _first = _currentPath.split("/")[1];
    
            if (_first === path) return "isSelected";
            return "isNotSelected";
        },
    },
    created(){
        //console.log("nav bar");
    }
}
</script>


<style scoped>
#navigation-bar{
    display: flex;
    border-bottom: 1.5px rgb(221, 221, 221) solid;
    /* box-shadow: 1px 1px 0.5px 1px rgb(221, 221, 221); */
    justify-content: space-between;
}

#menus {
    display: flex;
    margin-right: 20px;
}

.main-menu {
    font-size: 16px;
    background-color: white;
    display: inline-block;
    height: 55px;
    padding: 0px 15px;
    border: none;
    font-weight: 500;
}

img {
    height: 55px;
}

.main-menu.isSelected {
    position: relative;
    border-bottom: 2px var(--custom-blue) solid;
    padding-bottom: 2px;
    top: 2px;
}

.main-menu:hover {
    color: var(--custom-blue);
}

.nav-button:hover .main-menu {
    color: var(--custom-blue);
}

@keyframes rainbow {
  0% {
    color: rgba(255, 0, 0, 1), 
  }
  10% {
    color: rgba(255, 154, 0, 1)
  }
  20% {
    color:rgba(208, 222, 33, 1);
  }
  30% {
    color: rgba(79, 220, 74, 1) ;
  }
  40% {
    color: rgba(63, 218, 216, 1);
  }
  50% {
    color: rgba(63, 218, 216, 1);
  }
  60% {
    color: rgba(47, 201, 226, 1); 
  }
  70% {
    color: rgba(28, 127, 238, 1);
  }
  80% {
    color: rgba(95, 21, 242, 1);
  }
  90% {
    color: rgba(186, 12, 248, 1);
  }
  100% {
   color: rgba(251, 7, 217, 1);
  }
}

#home {
    padding: 0px 20px;
    background-color: rgba(0, 0, 0, 0.7);
}

.home {
    font-weight: 700;
    font-size: 20px;
    animation-name: rainbow;
    animation-duration: 10s;
    background-clip: text;
    color: transparent;
    display: inline-block;
    animation-iteration-count: infinite;
}

/* need this for hovering */
.nav-button:hover .sub-menu-list {
    display: block;
}

.sub-menu-list {
    background-color: white;
    border: 1px black solid;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    top: 48px;
    overflow: hidden;
}

.sub-menu-button {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 15px;
}

.sub-menu-button:hover {
    background-color:var(--custom-blue-transp);
}

.fa-angle-down {
    margin-left: 8px
}

</style>