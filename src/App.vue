<template>
  <Header></Header>
  <!-- router.jsを経由して呼び出されたコンポーネントの内容が描画される -->
  <router-view/>
  <Fotter></Fotter>
</template>

<script>
import Header from '../src/components/organisms/oHeader.vue'
import Fotter from '../src/components/organisms/oFotter.vue'
import Const from '../src/components/const/commonConst'

export default {
  name: 'App',
  components: {
    Header,
    Fotter
  },
  created() {
    // ホーム画面を初期表示する
    this.$router.push(Const.PAGE_HOME);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
