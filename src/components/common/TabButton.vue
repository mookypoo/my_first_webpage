<template>
        <!-- @click="changeTab(path)"  -->
    <div>
        <button class="tab-button" @click="changeTab(path)" type="button" :id="text"  :aria-controls="submenuId" aria-expanded="false">
            <router-link class="main-text"  :to="path" :style="{color: isSelected ? `var(--custom-blue)` : `black`}">{{ text }}</router-link>
        </button>
        <div class="submenu">

        </div>
        
    </div>
</template>

<script>
import router from '../../router/index.js';
import { changeTab } from '../../router/index.js';


export default {
    name: 'TabButton',
    props: {
        text: String,
        onClick: {
            type: Function,
            default: () => { console.log("on click tab button") }
        },
        path: String,
        submenuId: String,
    },
    methods: {
        changeTab(path) {
            console.log(this.$route)
            changeTab(path);
            //console.log(router.currentRoute.value);
        },
    },
    created(){
        console.log(this.submenuId)
        //console.log(router.currentRoute.value.path === this.path);
    },
    computed: {
        isSelected() {
            return router.currentRoute.value.path === this.path;
        }
    },
    mounted(){
    
    }
}

/*
<form><input name="" ty> <input type="submit"></form>
*/
</script>

<style scoped>
.tab-button {
    height: 70px;
    margin-right: 30px;
    
    border: none;
    font-size: 16px;
    font-weight: 600;
}
/*.tab-button
button:hover {
    font-size: 18px;
    cursor: pointer;
}
*/

.main-text {
    text-decoration: none;
}

</style>


