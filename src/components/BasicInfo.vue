<template>
    <div>
        <h1 class="korean">{{ me.fullName }}</h1>
        <table>
            <InfoRow infoType="직업" :infoText="me.occupation" infoIcon="fa solid fa-user"></InfoRow>
            <InfoRow infoType="이메일" :infoText="me.email" infoIcon="fa solid fa-at"></InfoRow>
            <InfoRow infoType="핸드폰" :infoText="me.phoneNumber" infoIcon="fa solid fa-phone"></InfoRow> 
            <InfoRow 
                infoType="블로그" infoIcon="fa solid fa-blog"
                :infoData="blogRow(me.website)">
            </InfoRow>
        </table>
    </div>
    <div>
        <h5 class="this">hello</h5>
        <h5 class="hidden">bye</h5>
    </div>
    <Education class="education"></Education>
</template>

<script>
import { Profile } from '../class/profile.js'
import Education from './Education.vue'
import InfoRow from './basic_info/InfoRow.vue'

export default {
    components: {
        Education,
        InfoRow,
    },
    // props: the way we pass data from parent component to its child components 
    // data: private memory of each component 
    data() {
        return {
            //me: new Profile("김혜수", "개발자", "sookim482.dev@gmail.com", "01025178351", "https://medium.com/@mookypoo"),
        }
    },
    methods: {
        blogRow(website){
            return `<a href=${website} target='blank' rel='noopener noreferrer'>${website}</a>`
        }
    },
    // initstate
    created() {
        this.me = new Profile("김혜수", "개발자", "sookim482.dev@gmail.com", "01025178351", "https://medium.com/@mookypoo")
        //console.log("created");
    },
    // $ when using built-in APIS via component instance 
    mounted() {
        //console.log("mounted");
    },
    // like dispose 
    unmounted() {
        //console.log("unmounted")
    },
    computed: {
        
    }

}
</script>

<style scoped>

h1 {
    margin-top: 40px;
    margin-bottom: 30px;
    /*animation: rainbow 7s infinite; */
    background-image: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
    /*gradient as background images clipped on top of test isn't supported by all browsers --> need fallback */
    color: transparent; /* so that the color behind text will be shown */
    display: inline-block;
    background-clip: text; /* render background where there's text */

}

table {
    margin: auto; /* for centering table */
}

@keyframes rainbow {
  0% {
    color: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
  }
  20% {
    color: yellowgreen;
  }
  40% {
    color: yellow;
  }
  60% {
    color: aqua;
  }
  80% {
    color: orange;
  }
  100% {
   color: white;
  }
}

th, td {
    padding-bottom: 5px;
}

th {
    text-align: right;
    padding-left: 3rem;
}

td {
    text-align: left;
    padding-left: 1rem;
}

.education {
    margin-top: 70px;
}

.this:hover + .hidden {
    display: block;
}
</style>