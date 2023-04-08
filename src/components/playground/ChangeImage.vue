<template>
    <div>
        <div class="container">
            <img :src="randomImages.images[randomImages.index]" id="outer" alt="blurred random image"/>
            <img :src="randomImages.images[randomImages.index]" id="inner" alt="random image"/>
        </div>
        <Button text="Change Image" :onClick="randomImages.changeImage" color="green"></Button>
    </div>
</template>

<script>
import { reactive } from 'vue'
import Button from '../common/MainButton.vue'

const randomImages = reactive({
    images: [
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    ],
    index: 0, 
    changeImage() {
        console.log(randomImages.index);
    
        if (randomImages.index == randomImages.images.length - 1) {
            randomImages.index = 0;
        } else {
            randomImages.index++
        }
    }
})

export default {
    name: 'Change Images!',
    components: {
        Button
    },
    data() {
        return {
            randomImages: randomImages,
        }
    }

}

</script>

<style scoped>
.container {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    position: relative;
    margin: auto; /* centers item */
    border: 1px black solid;
}

img {
    border-radius: 50%;
    margin-bottom: 50px;
}

#outer {
    width: 100%;
    height: 100%;
    position: center;
    margin: 0 auto;
    filter: blur(2px);
}

#inner {
    width: 75%;
    height: 75%;
    right: 12.5%;
    top: 12.5%;
    position: absolute;
}
</style>

