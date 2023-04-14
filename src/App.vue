<template>
    <!--<TopBar :height=topBarHeight ></TopBar>-->
    <component :is="NavigationBar"></component>
    <!-- <NavigationBar :height=topBarHeight></NavigationBar> -->
    <router-view></router-view>
  <div>
  
  </div>
</template>

<script setup>
import { useCookies } from "vue3-cookies"
import NavigationBar from "./components/nav_bar/NavBar.vue"
import router from './router'


</script>




export default {
  name: 'App',
  components: {
    TopBar, NavigationBar
  },
  data() {
    return {
      topBarHeight: "70px",
      //isAccountPage: false,
    }
  },
  mounted() {
    //this.cookies.set("sec", "pop", 30, "/", "unsplash") // "30d", "/", "http://192.168.200.152", false, "none"
    //console.log("sec cookie exists?", this.cookies.isKey("sec"))
    //console.log("_ga cookie exists?", this.cookies.isKey("_ga"))
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  methods: {
    // isAccountPage(){
    //   console.log(router.currentRoute.value.path.split("/")[1]);
    //   if (router.currentRoute.value.path.split("/")[1] === "account") return true;
    //   return false;
    // }

  },
  updated(){
    // console.log("is updatd");
    // this.isAccountPage = () => {
    //   console.log(router.currentRoute.value.path.split("/")[1]);
    //   if (router.currentRoute.value.path.split("/")[1] === "account") return true;
    //   return false;
    // }
  },
  watch: {
    // isAccountPage(){
    //   console.log(router.currentRoute.value.path.split("/")[1]);
    //   if (router.currentRoute.value.path.split("/")[1] === "account") return true;
    //   return false;
    //   //console.log("ismemers watch");
    // }
  },
  created(){
    // this.$watch(
    //   this.$route.path,
    //   (path, path2) => {
    //     console.log("path:", path, path2);
    //   }
    // )
  }
}


<style>
* {
  margin: 0;
  font-family: "Open Sans";
  --custom-blue: rgba(28, 127, 238, 1);
  --custom-blue-transp: rgba(28, 127, 238, 0.3);
  --custom-aqua: rgba(11, 252, 228, 1);
}

#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



input[lang=kr], .korean {
  font-family: "Noto Sans KR"
}

input[lang=en], .english {
  font-family: "Open Sans"
}

/*
.tab {
  padding-top: v-bind(topBarHeight);
}
*/

button:hover {
  cursor: pointer;
}

.hidden {
  display: none;;
}

</style>
