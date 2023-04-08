<template>
    <div class="page">
        <div id="first">
            <h1 class="first">Change the Image!</h1>
            <ChangeImage></ChangeImage>
        </div>
        <div id="second">
            <h1 class="second">Take a Quiz!</h1>
            <Quiz></Quiz>
        </div>
    </div>
</template>

<script>
import ChangeImage from './ChangeImage.vue'
import Quiz from './Quiz.vue'

export default {
    name: 'Playground',
    components: {
        ChangeImage,
        Quiz
    },
}
</script>


<style scoped>

h1 {
    padding-bottom: 50px;
    padding-top: 50px;
}

h1.first {
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

#first {
    background: linear-gradient(purple 25%, rgb(184, 26, 184) 50%, rgb(230, 123, 230) 80%);
}

.second {
    text-shadow: 3px 3.5px rgba(184, 37, 37, 0.5);
}

#second {
    background: linear-gradient(90deg, darkgreen 10%, green 20%, yellowgreen 80%)
}
</style>

