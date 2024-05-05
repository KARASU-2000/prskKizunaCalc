import { createApp } from 'vue'
import App from './App.vue'
import Router from './components/const/router'

// router.jsをインポートし、インスタンスをセットする
createApp(App).use(Router).mount('#app')
