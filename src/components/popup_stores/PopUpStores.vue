<template>
    <div id="page">
        <div class="grid" v-for="store in stores" :key="store">
            <PopUpThumbnail :store="store"></PopUpThumbnail>
        </div>
    </div>
</template>


<script>
import { popUpsStore, PopUpStore } from '@/store/popup_stores.js';
import PopUpThumbnail from './PopUpThumbnail.vue';
import { mapState, mapActions } from 'pinia';

export default {
    name: "PopUpStores",
    components: { PopUpThumbnail },
    data() {
        return {
            convertedStore: new PopUpStore(
                "96", "시몬스 그로서리 스토어 청담", "20220211", "20220211", "서울특별시 강남구 청담동",
                "https://dfp41nwvghhe0.cloudfront.net/dev/store/96/tsseCyKzEPQvPClQIaaiKh?w=450&h=450&f=webp&q=90"
            ),
            // store: {
            //     storeId: 96,
            //     name: "시몬스 그로서리 스토어 청담",
            //     startDate: "20220211",
            //     endDate: "20230131",
            //     address: "서울특별시 강남구 청담동",
            //     thumbnailUrl: "https://dfp41nwvghhe0.cloudfront.net/dev/store/96/tsseCyKzEPQvPClQIaaiKh?w=450&h=450&f=webp&q=90"
            // },
        }
    },
    computed: {
        ...mapState(popUpsStore, ["stores"])
    },
    methods: {
        ...mapActions(popUpsStore, ["fetchPopUpStores"])
    },
    async created(){
        await this.fetchPopUpStores();
    },
    mounted(){
       //console.log(this.stores[2].name)
    }
}
</script>


<style scoped>
#page {
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    margin: 40px;
    display: flex;
    flex-wrap: wrap;
}
.grid {
    flex-direction: column;
}
</style>
