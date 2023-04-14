<template>
    <button class="checkBox" :onClick="onClick">
        <div class="box" :class="[isSelected ? 'selected' : 'unselected']" >
            <i class="fa-solid fa-check" v-if="isSelected" ></i>
        </div>
        {{ text }}
    </button>
</template>


<script>
export default {
    props: {
        text: String,
        isSelected: Boolean,
        onClick: Function,
        fontSize: {
            type: String,
            default: "15px"
        },
        boxWidth: {
            type: String,
            default: "20px"
        },
        bgColor: {
            type: String,
            default: "white"
        }
    },
}
</script>


<style scoped>
.checkBox{
    display: flex;
    justify-items: center;
    background-color: transparent;
    border: none;
    font-size: v-bind(fontSize);
}

.box {
    width: v-bind(boxWidth);
    height: v-bind(boxWidth);
    border: 1px black solid;
    border-radius: 3px;
    margin-right: 0.8rem;
    padding: 0;
    align-content: center;
    align-self: center;
    background-color: v-bind(bgColor);
}

.box.selected {
    background-color: black;
}

.fa-check {
    color: white
}

#text {
    font-size: v-bind(fontSize);
}

button:hover {
    cursor: pointer;
    color: grey;
}
</style>