<template>
<div id="register">
    <div id="register-column">
        <h2>新規登録画面</h2>
        <label for="name">ユーザ名</label>
        <input id="name" v-model="name">
        <br><br>
        <label for="email">メールアドレス</label>
        <input id="email" type="email" v-model="email">
        <br><br>
        <label for="password">パスワード</label>
        <input id="password" type="password" v-model="password">
        <br><br>
        <button @click="register">新規登録</button>
        <br>
        <a>ログインはこちらから</a>
    </div>
    <footer>Copyright ©2019 ○○ Inc All rights reserved</footer>
</div>
</template>

<script>
import axios from '../axios-auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            name: '',
        }
    },
    methods: {
        register() {
            //ここの/accounts:signUpの下りは間違えて貼り付けやすいの公式ドキュメントみて注意する
            axios.post('/accounts:signUp?key=AIzaSyDrQSUat0HsNllRHL2hborAa3zLah4OYbQ', {
                    email: this.email,
                    password: this.password,
                    displayName: this.name,
                    returnSecureToken: true,
                })
                .then(response => {
                    console.log(response);
                })
            this.email = '';
            this.password = '';
        }

    }
}
</script>

<style scoped>
#register-column button {
    background-color: white;
    color: #84BDEC;
    border: 1px #84BDEC solid;
    padding: 10px;
}

#register-column a {
    color: #84BDEC;
}

#register footer {
    margin-top: 100px;
}
</style>
