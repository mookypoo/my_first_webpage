<template>
    <div>
        <div id="type-selection">
            <div v-for="inquiryType in inquiryTypes" :key="inquiryType">
                <button class="inquiry-type" @click="onClick(inquiryType)">
                    <div class="inquiry-checkbox" :class="{ selected: isSelected(inquiryType)}">
                        <i class="fa-solid fa-check" v-if="isSelected(inquiryType)" ></i>
                    </div>
                    <span class="korean inquiry-text" >{{ inquiryType }}</span>
                </button>
            </div>
        </div>
        <div class="user-input">
            <h6 class="textfield-title" >Name</h6>
            <input class="textfield" v-model="name" placeholder="Your name silly!!">
            <body>Your name is: {{ name }}</body>
        </div>
        <div class="user-input">
            <h6 class="textfield-title" >E-mail</h6>
            <input class="textfield" placeholder="e-mail please" v-model="email">
        </div>
        <div class="user-input">
            <h6 class="textfield-title" >Body</h6>
            <textarea class="textfield multi-line" placeholder="What do you want to say?"></textarea>
        </div>
        <button class="" @click="validate">
            Submit
        </button>
        
    </div>
</template>

<script>
export default {
    name: "contact POPS",
    data() {
        return {
            inquiryTypes: [
                "팝업스토어 등록 신청", "콘텐츠 제작 문의", "팝업스토어 기획 문의", "기타 문의"
            ],
            selectedInquiryIndex: 0,
            email: "",
            name: "",
            body: "",
            nameErrorText: "",
            emailErrorText: "",
            bodyErrorText: "",
        }
    },
    methods: {
        isSelected(text){
            return text === this.inquiryTypes[this.selectedInquiryIndex];
        },
        onClick(text){
            const _index = this.inquiryTypes.findIndex(value => value === text);
            this.selectedInquiryIndex = _index;
        },
        validate(){
            console.log("validate");
        },
    },
}
</script>


<style scoped>
* {
    --width: 360px
}

.fa-check {
    color: white;
}

#type-selection {
    width: var(--width);
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-bottom: 20px;
}
.inquiry-type {
    background-color: transparent;
    align-items: center;
    display: flex;
    margin-bottom: 10px;
    padding: 5px;
    border: none;
}

.inquiry-checkbox {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    background-color: rgba(221, 221, 221, 1);
    border: none;
    border-radius: 3px;
    margin-right: 10px;
}

.inquiry-checkbox.selected {
    background-color: var(--custom-blue);
}

.inquiry-text {
    font-size: 15px;
    margin-right: 20px;
}

.user-input {
    margin: auto;
    width: var(--width);
    margin-bottom: 20px;
}

.textfield-title {
    font-size: 17px;
    text-align: left;
    margin-bottom: 8px;
}

.textfield {
    height: 30px;
    border-radius: 2px;
    border: 1px grey solid;
    width: 100%;
    font-size: 14px;
    padding: 4px 8px;
    outline: none; /* to get rid of default outline when focused */
    /* outline-color : var(--custom-blue) !important;  */
}

.textfield.multi-line {
    height: 100px;
}

.textfield:focus {
    border: 1.5px var(--custom-blue) solid;
}

</style>
