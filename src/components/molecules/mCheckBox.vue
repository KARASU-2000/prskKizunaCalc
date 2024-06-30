<script>
export default{
    props:{
        name: String, //チェックボックスの名前(同じ名前が1セットのチェックボックス)
        itemList: Array["value", "defaultChecked"], //id：HTML上のID、value：チェックボックスの値、defaultChecked：何かしら受け取るとデフォルトでチェックが入る
    },
    data(){
        return{
            values: []
        }
    },
    methods:{
        onUpdate: function($event){
            if($event.target.checked){
                this.values.push($event.target.value);
            }
            else{
                // filter関数でチェックが外された値を取り除く
                this.values = this.values.filter((v) => v !== $event.target.value);
            }
            // 親コンポーネントは、v-on:updateValue="dataコンポーネント = $event"で値をバインドする
            this.$emit('updateValue', this.values);
        }
    }
}
</script>

<template>
    <div v-for="(item, index) in itemList" v-bind:key="index">
        <input
            type="checkbox"
            v-bind:name="name"
            v-bind:value="item.value"
            v-bind:checked="item.defaultChecked"
            v-on:change="onUpdate">
            {{ item.value }}
    </div>
</template>