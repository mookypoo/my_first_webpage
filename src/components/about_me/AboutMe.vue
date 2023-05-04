<template>
    <div class="tab-row" >
        <div v-for="tab in tabs" :key="tab">
            <button class="tab" :id="tab.section" @click="onClickTab(tab.section)">
                {{ tab.text }}
            </button>
        </div>
        <div class="active-section-line js" id="js" type="animation"></div>
        <div class="active-section-line css" id="css"></div>
    </div>
    <Background v-if="currentIndex === 0"></Background>
    <Education v-if="currentIndex === 1"></Education>
    <Experience v-if="currentIndex === 2"></Experience>
</template>


<script>
import router from '@/router';
import ToggleTransition from './Transition.vue';
import Education from './Education.vue';
import Background from './Background.vue';
import Experience from './Experience.vue';

export default {
    name: "About Me",
    components: { ToggleTransition, Education, Background, Experience },
    methods: {
        async onClickTab(section){
            console.log("ha");
            //console.log(this.$route.params);
            await router.push(`/about_me/${section}`);
            //console.log(this.$route.params);

            // const _animation = document.getElementById("css").getAnimations()[0];
            //     if (_animation.currentTime != 0) _animation.currentTime = 0; /// reset animation
                
            //     const _index = this.tabs.findIndex(value => value.section === section);
            //     const _start = this.tabs[_index].start;

            //     if (_index > this.currentIndex) { /// 오른쪽으로 움직임 
            //         this.start = this.end;
            //         this.outer = `${_start + 3}%`; /// 조금 더 오른쪽으로 갔다가
            //         this.inner = `${_start - 1}%`; /// 조금 왠쪽으로 갔다가
            //         this.end = `${_start}%`;
            //     } else { /// 왠쪽으로 움직임 
            //         this.start = this.end;
            //         this.outer = `${_start - 3}%`; /// 조금 더 오른쪽으로 갔다가
            //         this.inner = `${_start + 1}%`; /// 조금 왠쪽으로 갔다가
            //         this.end = `${_start}%`;
            //     }
            //     this.currentIndex = _index;
            //     this.animationState = "running";
                
        }   
    },
    data(){
        return {
            start: "0%",
            outer: "0%",
            inner: "0%",
            end: "0%",
            animationState: "paused",
            tabs: [
                {text: "Background", section: "background", start: 0, end: 100 / 3 , order: 0},
                {text: "Education", section: "education", start: 100 / 3, end: 100 /3 * 2, order: 1},
                {text: "Experience", section: "experience", start: 100 /3 * 2, end: 100, order: 2 },
            ],
            currentIndex: 0,
        }
    },
    mounted(){
        console.log("mounted", this.$watch(() => this.$route.params, (toParams, previousParams) => {
            console.log("mounted watch");
        }))
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log("to: ", toParams, "previous", previousParams);
        
                const _animation = document.getElementById("css").getAnimations()[0];
                if (_animation.currentTime != 0) _animation.currentTime = 0; /// reset animation
                
                const _index = this.tabs.findIndex(value => value.section === toParams.section);
                const _start = this.tabs[_index].start;

                if (_index > this.currentIndex) { /// 오른쪽으로 움직임 
                    this.start = this.end;
                    this.outer = `${_start + 3}%`; /// 조금 더 오른쪽으로 갔다가
                    this.inner = `${_start - 1}%`; /// 조금 왠쪽으로 갔다가
                    this.end = `${_start}%`;
                } else { /// 왠쪽으로 움직임 
                    this.start = this.end;
                    this.outer = `${_start - 3}%`; /// 조금 더 오른쪽으로 갔다가
                    this.inner = `${_start + 1}%`; /// 조금 왠쪽으로 갔다가
                    this.end = `${_start}%`;
                }
                this.currentIndex = _index;
                this.animationState = "running";
            }
        );
    },
    unmounted(){
        console.log("unmounted");
    },
    created(){
        console.log("created", this.$watch(() => this.$route.params, (toParams, previousParams) => {
            console.log("mounted watch");
        }));

        /// set initial active section line
        const _currentSection = this.$route.params["section"];
        const _index = this.tabs.findIndex(value => value.section === _currentSection);
        if (_index === this.currentIndex) return;
        this.currentIndex = _index;
        this.start = `${this.tabs[_index].start}%`;
        this.end =  `${this.tabs[_index].start}%`;
        
        // this.$watch(
        //     () => this.$route.params,
        //     (toParams, previousParams) => {
        //         console.log("to: ", toParams, "previous", previousParams);
        
        //         const _animation = document.getElementById("css").getAnimations()[0];
        //         if (_animation.currentTime != 0) _animation.currentTime = 0; /// reset animation
                
        //         const _index = this.tabs.findIndex(value => value.section === toParams.section);
        //         const _start = this.tabs[_index].start;

        //         if (_index > this.currentIndex) { /// 오른쪽으로 움직임 
        //             this.start = this.end;
        //             this.outer = `${_start + 3}%`; /// 조금 더 오른쪽으로 갔다가
        //             this.inner = `${_start - 1}%`; /// 조금 왠쪽으로 갔다가
        //             this.end = `${_start}%`;
        //         } else { /// 왠쪽으로 움직임 
        //             this.start = this.end;
        //             this.outer = `${_start - 3}%`; /// 조금 더 오른쪽으로 갔다가
        //             this.inner = `${_start + 1}%`; /// 조금 왠쪽으로 갔다가
        //             this.end = `${_start}%`;
        //         }
        //         this.currentIndex = _index;
        //         this.animationState = "running";
        //     },
        //     {
        //         immediate: true,
        //     }
        // );
    }    
}
</script>


<style scoped>
* {
    --tab-row-width: 330px;
}
.tab-row {
    display: flex;
    margin: 40px 25px;
    position: relative;
    width: var(--tab-row-width);
}

.tab {
    padding: 5px 9px 10px 9px;
    font-weight: 600;
    font-size: 15px;
    border: none;
    background-color: white;
    width: calc(var(--tab-row-width) / 3);
}

/* @keyframes section-line {
    from {left: v-bind(leftStart)}
    to {left: v-bind(leftEnd)}
} */

@keyframes section-line {
    0% {
        left: v-bind(start)
    }

    50% {
        left: v-bind(outer)
    }

    70% {
        left: v-bind(inner)
    }

    100% {
        left: v-bind(end)
    }
}

.active-section-line {
    width: calc(100% / 3);
    position: absolute;
}

.active-section-line.css {
    border-bottom: 2px solid black;
    animation-name: section-line;
    animation-duration: 0.5s;
    bottom: 0px;
    animation-timing-function: step-start linear;
    /* animation: section-line 0.6s linear() ease-in; */
    /* animation-fill-mode: v-bind(fillMode); */
    animation-fill-mode: forwards;
    animation-play-state: v-bind(animationState); 

}

.active-section-line.js {
    border-bottom: 2px solid blue;
    bottom: -2px;
    display: none;
}
</style>