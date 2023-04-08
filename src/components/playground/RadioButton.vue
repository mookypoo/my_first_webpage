<template>
    <button class="radioButton" :onClick="onClick">
        <div class="circle">
            <div id="outer"></div>
            <!--:style="{display: [isSelected ? 'content' : 'none']}"-->
            <div id="inner" :class="isSelected ? 'isSelected' : 'unSelected'"></div>
        </div>
        {{ text }}
    </button>
</template>


<script>
export default {
    name: "Radio Button",
    props: {
        text: String,
        isSelected: Boolean,
        onClick: Function,
        fontSize: {
            type: String,
            default: "15px"
        }
    },
}
</script>


<style scoped>
* {
    --inner-circle-width: 65%;
    --inner-circle-margin: calc( (100% - var(--inner-circle-width)) / 2);
}
.radioButton {
    display: flex;
}

button {
    border: none;
    background-color: white;
    font-size: v-bind(fontSize);
    align-items: center;
}

.circle {
    margin-right: 0.8rem;
    width: 20px;
    height: 20px;
    border: black 1px solid;
    border-radius: 50%;
    position: relative;
}

#inner {
   width: var(--inner-circle-width);
   height: var(--inner-circle-width);
   background-color: black;
   border-radius: 50%;
   top: var(--inner-circle-margin);
   left: var(--inner-circle-margin);
   position: absolute;
}

#text {
    font-size: v-bind(fontSize);
}

.unSelected {
    display: none;
}

</style>