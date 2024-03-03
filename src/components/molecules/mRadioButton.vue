<script>
export default{
    props:{
        name: String, //ラジオボタンの名前(同じ名前が1セットのラジオボタン)
        isFlex: Boolean, //CSSを適用するかどうか
        itemList: Array["value", "defaultChecked"], //id：HTML上のID、value：ラジオボタンの値、defaultChecked：何かしら受け取るとデフォルトでチェックが入る
    },
    methods:{
        onUpdate: function($event){
            // 親コンポーネントは、v-on:updateValue="dataコンポーネント = $event"で値をバインドする
            this.$emit('updateValue', $event.target.value);
        }
    }
}
</script>

<template>
    <div v-bind:class="{flex: isFlex}">
        <div v-for="(item, index) in itemList" v-bind:key="index">
            <input
                type="radio"
                v-bind:name="name"
                v-bind:value="item.value"
                v-bind:checked="item.defaultChecked"
                v-on:change="onUpdate">
                {{ item.value }}
        </div>
    </div>
</template>

<style>
/* 適用すると横並びになる */
.flex{
    display: flex;
}
</style>