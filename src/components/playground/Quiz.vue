<template>
    <div class="quiz" v-if="mode === 'quiz'">
        <div class="outerContainer">
            <div class="innerContainer">
                <b id="question">{{ `${currentIndex + 1}` + ".  " + `${myQuiz[currentIndex].question}` }}</b>
                <div class="answer" v-for="answer in myQuiz[currentIndex].answers" :key="answer">
                    <CheckBox v-if="myQuiz[currentIndex].canSelectMultiple" :text="answer.answer" :isSelected="answer.isSelected" :onClick="() => onClickCheckBox(answer.answerId)"></CheckBox>   
                    <RadioButton v-else :text="answer.answer" :isSelected="answer.isSelected" :onClick="() => onClickRadioButton(answer.answerId)"></RadioButton>   
                </div>
            </div>
            <div class="arrows">
                <div>
                    <button class="arrow" :onClick="() => onClickArrow(true)" :style="{display: currentIndex === 0 ? `none` : `block`}"><i class="fa solid fa-arrow-left fa-lg"></i></button>
                </div>
                <div>
                    <button class="arrow" :onClick="() => onClickArrow(false)" :style="{display: currentIndex === myQuiz.length - 1 ? `none` : `block`}"><i class="fa solid fa-arrow-right fa-lg"></i></button>
                </div>
            </div>
        </div>
        <b>{{ `${currentIndex + 1}` + " / " + `${myQuiz.length}` }}</b>
        <div class="bottomRow" style="justify-content: space-between">
            <MainButton text="Reset" :width="buttonWidth" :onClick="resetQuiz"></MainButton>
            <MainButton text="Submit" :width="buttonWidth" :onClick="onSubmit"></MainButton>
        </div>  
    </div>
    <div class="result" v-if="mode === 'result'">
        <div class="outerContainer">
            {{ `You got ${score}% correct!`}}
        </div>
        <div class="bottomRow" style="justify-content: center">
            <MainButton text="Retake" :width="buttonWidth" :onClick="reTakeQuiz"></MainButton>
        </div>  
    </div>
    
</template>

<script setup>
import CheckBox from './CheckBox.vue'
import RadioButton from './RadioButton.vue'
import MainButton from '../common/MainButton.vue'
import { mapActions, mapState } from "pinia";
import { useQuizStore, quizStore } from '@/store/quiz.js'
import { computed } from 'vue';

const store = useQuizStore();
const mode = computed(() => store.mode);
const currentIndex = computed(() => store.currentIndex);
const myQuiz = computed(() => store.myQuiz);

</script>



import CheckBox from './CheckBox.vue'
import RadioButton from './RadioButton.vue'
import MainButton from '../common/MainButton.vue'
import { mapActions, mapState } from "pinia";
import { quizStore } from '@/store/quiz.js'

export default {
    name: 'Quiz About Me',
    components: {
        CheckBox, RadioButton, MainButton
    },
    data() {
        return {
            buttonWidth: "100px"
        }
    },
    // computed properties 
        // - cached based on reactive dependencies
        // - only re-evaluate when some of its reactive dependencies have changed 
        // - by default getter-only --> need to create setter 
    // vs. method invocation (always run whenever a re-render happens)
    computed: {
        // map state properties as read-only computed properties 
        // ...mapState(quizStore, ["getQuiz"]),
        // ...mapState(quizStore, {
        //     /// state 해도 되고, getter 해도 되고 , method everything 
        //     myQuiz: 'quiz', // same as above but registers it as myQuiz,
        //     onClickAnswer: "onClickAnswer"
        // })
        ...mapState(quizStore, ['currentIndex', "mode", "myQuiz", "score"]),
    },
    methods: {
        ...mapActions(quizStore, ['onClickCheckBox', "onClickArrow", "onClickRadioButton", "resetQuiz", "onSubmit", "reTakeQuiz"])
    },

}



<style scoped>
* {
    --quiz-width: 300px;
    --arrow-width: 450px;
}
.outerContainer {
    width: var(--arrow-width);
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    background-color:white;
    border-radius: 20px;
}

.innerContainer {
    display: grid; /* space between top and bottom */
    width: var(--quiz-width);
}

#question {
    margin-bottom: 1rem;
    display: inline;
    font-size: 17px;
}

button.arrow {
    border: none;
    background-color: transparent;
}

.answer {
    padding-left: 5px;
    margin-bottom: 3px;
}

.arrows {
    justify-content: space-between;
    width: var(--arrow-width);
    display: flex;
    position: absolute;
}

#right {
    margin-left: var(--icon-margin);
}

#left {
    margin-right: var(--icon-margin);
}

button:hover {
    cursor: pointer;
}

.bottomRow {
    width: var(--quiz-width);
    display: flex;
    margin: auto;
}

</style>