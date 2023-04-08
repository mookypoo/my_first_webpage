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
    width: 20px;
    height: 20px;
    border: 1px black solid;
    border-radius: 5px;
    margin-right: 0.8rem;
    padding: 0;
    align-content: center;
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