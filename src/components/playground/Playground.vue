<template>
    <div class="page">
        <div id="change-image">
            <h1 class="change-image">Change the Image!</h1>
            <ChangeImage></ChangeImage>
        </div>
        <div id="quiz">
            <h1 class="quiz">Take a Quiz!</h1>
            <Quiz></Quiz>
        </div>
    </div>
</template>

<script>
import ChangeImage from './ChangeImage.vue'
import Quiz from './Quiz.vue'
import router from '@/router';

function _goToHashSection() {
    const _hash = router.currentRoute.value.hash.substring(1);
    const _element = document.getElementById(_hash);
    if (_element === null) return;
    _element.scrollIntoView({ behavior: 'smooth'});
}

export default {
    name: 'Playground',
    components: {
        ChangeImage,
        Quiz
    },
    mounted(){
      _goToHashSection();
    },
    updated(){
      _goToHashSection();
    }
}
</script>


<style scoped>

h1 {
    padding-bottom: 50px;
    padding-top: 50px;
}

h1.change-image {
    color: white;
    animation: blink 5s infinite;
}

@keyframes blink{
  0% {
    color: white;
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

#change-image {
    background: linear-gradient(purple 25%, rgb(184, 26, 184) 50%, rgb(230, 123, 230) 80%);
}

.quiz {
    text-shadow: 3px 3.5px rgba(184, 37, 37, 0.5);
}

#quiz{
    background: linear-gradient(90deg, darkgreen 10%, green 20%, yellowgreen 80%)
}
</style>

