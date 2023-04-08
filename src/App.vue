<template>
    <TopBar :height=topBarHeight ></TopBar>
    
    <router-view></router-view>
  <div>
  
  </div>
</template>


<script>
import TopBar from './components/common/TopBar.vue'
import { useCookies } from "vue3-cookies"

export default {
  name: 'App',
  components: {
    TopBar
  },
  data() {
    return {
      topBarHeight: "70px"
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
}
</script>

<style>
* {
  margin: 0;
  font-family: "Open Sans";
  --custom-blue: rgba(28, 127, 238, 1);
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

.tab {
  padding-top: v-bind(topBarHeight);
}

button:hover {
  cursor: pointer;
}

.hidden {
  display: none;;
}

</style>
