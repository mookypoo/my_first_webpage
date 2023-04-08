<template>
    <!-- @click="changeTab('/')" -->
    <div id="topRow"  >
        <div class="menu">
            <router-link to="/"><button class="korean" id="nameBox">김혜수</button></router-link>
        </div>
        <div class="menu" type="button">
            <TabButton text="Playground" path="/playground"></TabButton>
        </div>
        <div class="main-menu-container">
            
            <div class="main-menu">
                <router-link to="guide" class="menu-text" id="guide" aria-controls="guide-menu" aria-expanded="false">
                    Guide
                </router-link>
                
            </div>
            
          
            <div class="hidden submenu" id="guide-menu" aria-labelledby="guide-menu">
                <body>hello hello hello</body>
            </div>
        </div>
        <div class="menu" type="button">
            <TabButton class="menu" text="Guide" path="/guide" ></TabButton>

            <div class="hidden">hello</div>
        </div>
        <div class="menu">
            <TabButton text="팝업스토어" path="/popup_stores"></TabButton>
        </div>
    </div>
    
</template>


<script>
import TabButton from './TabButton.vue'
import { changeTab } from '../../router/index.js'

export default {
    props: {
        height: String
    },
    components: {
        TabButton
    },
    methods: {
        changeTab: changeTab
    },

}
</script>

<style scoped>
.main-menu-container {
    box-sizing: border-box;
    height: v-bind(height);
    background-color: aqua;
    
}

/*
display: flex;
    justify-content: space-around;
    margin: 0 auto 0 0;
    max-width: 310px;*/ 

.main-menu {
    width: 100px;
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    display: grid;
    background-color:orange;
    align-content: center;

    
    
}


.main-menu:hover + .hidden {
    display: block;
    background-color: red;
    box-sizing: content-box;
    position: absolute; /* dhsfjsdkfjsldfk j이거 있으니까 위에 탭이 안커짐 */
    width: max-content
   
}
/* 
margin: 0 20px 0 20px;
    
    border: none;
    font-size: 16px;
    font-weight: 600;

    text-align: center;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column; 
    display: inline-flexbox; */

#topRow {
    margin: 0;
    padding: 0;
    width: 100%;
    /*
    position: fixed;
    z-index: 100;
    */
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
}

.menu {
    
}



#nameBox {
    height: v-bind(height);
    width: 130px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    border: none;
    background-color: white;
}

a {
    text-decoration: none;
}
.submenu {
   
    display: none;
}

</style>
