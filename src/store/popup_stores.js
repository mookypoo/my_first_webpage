import { defineStore } from "pinia";

export class PopUpStore {
    constructor(storeId = "", name = "", startDate = "", endDate = "", address = "", thumbnailUrl = ""){
        this.storeId = storeId;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.address = address;
        this.thumbnailUrl = thumbnailUrl;
    }

    get date(){
        return `${this.convertDate(this.startDate)} ~ ${this.convertDate(this.endDate)}`;
    }

    convertDate(date = ""){
        if (date.length === 0) return "미정";
        return `${date.substring(0, 4)}.${date.substring(4, 6)}.${date.substring(6, 8)}`
    }
}

export const popUpsStore = defineStore("pop ups", {
    state: () => ({
        stores: [new PopUpStore()]
    }),
    actions: {
        async fetchPopUpStores() {
            console.log("fetching");
            // "http://localhost:8080/web/v1/stores?page=1&pageSize=16"
            const _res = await fetch("http://124.5.182.47:8080/web/v1/stores?page=1&pageSize=16", {
                mode: 'cors',
                method: 'GET',
                //headers: {"Access-Control-Allow-Origin": "*", origin: "http://localhost:9300"}, 
            });
            console.log(_res);
            const _body = await _res.json();
            console.log(_body);
            let _arr = [];
            for (let i = 0; i < _body.payload.list.length; i++){
                let _store = new PopUpStore();
                _store = this._convertJson(_body.payload.list[i]);
                _arr.push(_store);
            }
            this.stores = _arr;
        },
        _convertJson(json){
            return new PopUpStore(json.storeId, json.name, json.startDate, json.endDate, json.address, json.thumbnailUrl);
        }
    },
});