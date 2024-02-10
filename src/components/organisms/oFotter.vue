<script>
import Home from '../pages/pHome'
import Disclaimer from '../pages/pDisclaimer'

// クライアントサイドのルーティングで画面遷移をする
// 参考：https://ja.vuejs.org/guide/scaling-up/routing
const routes = {
    '/': Home,
    '/disclaimer': Disclaimer
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            // 先頭の#を取り除く
            return routes[this.currentPath.slice(1) || '/']
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <div class="footer">
        <ul>
            <li><a href="#/">トップページ</a></li>
            <li><a href="#/disclaimer">免責事項</a></li>
        </ul>
    </div>
    <component :is="currentView" />
</template>

<style>
.footer {
    border-top: solid 1px lightgray;
    /* 下のマージンは固定にする */
    margin-bottom: 15px;
}

.footer ul {
    text-align: center;
}

.footer ul li {
    display: inline;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>