<template>
  <Header></Header>
  <Fotter></Fotter>
</template>

<script>
import Header from '../src/components/organisms/oHeader.vue'
import Fotter from '../src/components/organisms/oFotter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Fotter
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
