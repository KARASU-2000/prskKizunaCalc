<script>
export default{
    props:{
        text: String, //入力欄の隣に表示する文字
        name: String, //コントロールの名前
        min: String, //入力の最小値
        max: String, //入力の最大値
        enabled: Boolean, //活性状態にするかどうか(disabledを有効にすると非活性になるため、templateでは反転させる)
    },
    methods:{
        onInput: function($event){
            // 親コンポーネントは、v-on:updateValue="dataコンポーネント = $event"で値をバインドする
            this.$emit('updateValue', $event.target.value);
        }
    }
}
</script>

<template>
    {{ text }}
    <input
        type="number"
        v-bind:name="name"
        v-bind:min="min"
        v-bind:max="max"
        v-bind:disabled="!enabled"
        v-on:input="onInput($event)">
</template>