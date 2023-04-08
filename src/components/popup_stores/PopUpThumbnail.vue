<template>
    <div class="container">
        <img id="thumbnail" :src="store.thumbnailUrl"/>
        
        <div class="info">
            <h3 class="korean" id="name">{{ store.name }}</h3>
            <h5 id="date">{{ store.date }}</h5>
            <h4 class="korean" id="address">{{ store.address }}</h4>
        </div>
    </div>
</template>


<script>
import { PopUpStore } from '@/store/popup_stores.js';

export default {
    name: "Pop Up Store Thumbnail",
    props: {
        store: PopUpStore,
    },
    data() {
        return {
            // store: new PopUpStore(
            //     "96", "시몬스 그로서리 스토어 청담", "20220211", "20220211", "서울특별시 강남구 청담동",
            //     "https://dfp41nwvghhe0.cloudfront.net/dev/store/96/tsseCyKzEPQvPClQIaaiKh?w=450&h=450&f=webp&q=90"
            // )
        }
    },
    mounted(){
       // console.log(this.store);
    }
}
</script>


<style scoped>
.container {
    display: flex;
    width: 430px;
    margin-bottom: 40px;
}

#thumbnail {
   width: 150px;
   height: 150px;
   border-radius: 15px;
}

.info {
    margin-left: 1rem;
    text-align: left;
    margin-top: 5px;
}

#name {
    font-size: 19px;
}

#date {
    font-size: 15px;
    margin-top: 15px;
    font-weight: 500;
}

#address {
    margin-top: 10px;
    font-weight: 600;
    font-size: 15.5px;
    color: grey;
}

</style>
