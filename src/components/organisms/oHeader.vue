<script>
import Const from '../const/commonConst'

export default{
    data(){
        return{
            title: "プロセカ キズナランク計算"
        }
    },
    methods:{
        onHeaderClick(){
            // Homeへページ遷移する
            this.$router.push(Const.PAGE_HOME);
        }
    }
}
</script>

<template>
    <h3 class="header" v-on:click="onHeaderClick">{{title}}</h3>
</template>

<style>
.header{
    font-family: 'Inter';
    font-style: normal;

    position: relative;
    margin-left: 2.5%;
    /* 上のマージンは固定にする */
    margin-top: 10px;

    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header:hover{
    color: rgb(125, 125, 125);

    /* カーソルを指マークにする */
    cursor: pointer;
}
</style>
