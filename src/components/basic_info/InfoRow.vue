<template>
    <tr>
        <th class="korean">{{ infoType }} <i :class="infoIcon"></i> :</th>
        <!--<div v-html="tableData" class="info"></div>-->
        <div v-html="[infoData == undefined ? `<td>${infoText}</td>` : infoData]" class="info"></div>
    </tr>
</template>


<script>
export default {
    props: {
        infoType: String,
        infoText: String,
        infoData: String, /// html이랑 썪인경우 
        infoIcon: String,
    },
    // computed() {
        
    // },
    data() {
        return {
            tableData: (this.infoData == undefined) ? `<td>${this.infoText}</td>` : this.infoData,
        }
    },
}
</script>


<style scoped>
th, td {
    padding-bottom: 5px;
}

th {
    text-align: right;
    padding-left: 3rem;
}

.info {
    text-align: left;
    padding-left: 1rem;
}
</style>