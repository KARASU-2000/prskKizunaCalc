<script>
export default{
    props:{
        name: String, //ラジオボタンの名前(同じ名前が1セットのラジオボタン)
        isFlex: Boolean, //CSSを適用するかどうか
        itemList: Array["id", "value", "defaultChecked"] //id：HTML上のID、value：ラジオボタンの値、defaultChecked：何かしら受け取るとデフォルトでチェックが入る
    }
}
</script>

<template>
    <div v-bind:class="{flex: isFlex}">
        <div v-for="(item, index) in itemList" v-bind:key="index">
            <input
                type="radio"
                v-bind:name="name"
                v-bind:id="item.id"
                v-bind:value="item.value"
                v-bind:checked="item.defaultChecked">
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