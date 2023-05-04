<template>
    <div id="page">
        <div id="me">
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
        <div id="pops">
            <h1 class="korean">POPS</h1>
            <ContactPops></ContactPops>
        </div>
    </div>
</template>


<script>
import InfoRow from './InfoRow.vue';
import { Profile } from '@/class/profile.js'
import CheckBox from '@/components/playground/CheckBox.vue';
import ContactPops from './ContactPops.vue';

export default {
    name: "Contact",
    components: { InfoRow, CheckBox, ContactPops },
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
    data(){
        return {
            text: "Hello",
            email: "",
    
        }
    }
}
</script>


<style scoped>
#page {
    margin: auto;
    margin-bottom: 100px;
}

@media screen and (min-width: 900px) {
   #page {
      display: flex;
      margin: auto;
      justify-content: space-evenly;
   }
   #me {
        width: 40%;
        min-width: 400px;
    }
    #pops {
        width: 60%;
    }   
}

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


</style>