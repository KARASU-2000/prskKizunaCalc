// vue-routerを使用してページ遷移する
// 参考：https://qiita.com/ksh-fthr/items/a4ac1d04d9923c550cd7
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/pHome.vue'
import Disclaimer from '../pages/pDisclaimer.vue'
import Const from '../const/commonConst'

const router = createRouter({
  history: createWebHistory(),
  // ルーティングの設定
  // パス、名前、呼び出すコンポーネントを登録する
  routes: [
    {
      path: Const.PAGE_HOME,
      name: 'home',
      component: Home
    },
    {
      path: Const.PAGE_DISCLAIMER,
      name: 'disclaimer',
      component: Disclaimer
    }
  ]
})

export default router
