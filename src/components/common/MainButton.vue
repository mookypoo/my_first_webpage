<template>
    <!-- @click:"function()" or :onClick="onClick"-->
    <button class ="mainButton" :onClick="onClick" :style="{background: color}">
            {{ text }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: "Click Me!"
        },
        onClick: {
            type: Function,
            default: () => {console.log("clicked button")}
        },
        color: String,
        fontColor: {
            type: String,
            default: "white"
        },
        width: String,
    },
    mounted() {
    
    }
}
</script>

<style scoped>
.mainButton {
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 20px;
     /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 1.5px 1.5px 2px 1px rgba(0, 0, 0, 0.4);
    background-color: blue;
    color: v-bind(fontColor);
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px 10px 20px;
    width: v-bind(width)
}

button:hover {
    cursor: pointer;
    transform: scale(0.95);
    background-color: rgba(0, 0, 255, 0.7);
}

</style>