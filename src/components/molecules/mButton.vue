<script>
export default{
    props:{
        id: String, //HTML上のID
        name: String, //コントロールの名前
        value: String, //ボタンに表示する名前
    }
}
</script>

<template>
    <input type="button" class="inputButton" v-bind:id="id" v-bind:name="name" v-bind:value="value">
</template>

<style>
.inputButton:hover{
    /* カーソルが当たっているときは白にする */
    background-color: rgb(255, 255, 255);
}
</style>