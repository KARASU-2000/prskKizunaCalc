<script>
export default{
    props:{
        itemList: Array //テーブルを配列で受け取る(1行目がヘッダー)
    }
}
</script>

<template>
    <table>
        <!--1行目の1列目→2列目→…2行目の1列目…の順番で描画する-->
        <tr v-for="(rowItem, index) in itemList" v-bind:key="index">
            <th v-for="(item, index) in rowItem" v-bind:key="index">
                {{ item }}
            </th>
        </tr>
    </table>
</template>