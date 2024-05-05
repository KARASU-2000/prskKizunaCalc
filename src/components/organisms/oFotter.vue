<template>
    <div class="footer">
        <ul>
            <!-- vue-routerを使用してページ遷移する -->
            <li><router-link to="/">トップページ</router-link></li>
            <li><router-link to="/disclaimer">免責事項</router-link></li>
        </ul>
    </div>
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
