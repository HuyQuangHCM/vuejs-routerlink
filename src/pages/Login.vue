<template>
<main>
 <div class="ass1-login">
            <div class="ass1-login__logo">
            	<h3 class="ass1-wlogo"> Demo Router Link</h3>
            </div>
            <div class="ass1-login__content">
                <p>Đăng nhập</p>
                <div class="ass1-login__form">
                    <form action="#">
                        <input v-model="email" type="text" class="form-control" placeholder="Email" required="">
                        <div class="ass1-input-copy">
                            <input v-model="password" type="password" class="form-control" placeholder="Mật khẩu" required="">
                            <a href="#">Copy</a>
                        </div>
                        <div class="ass1-login__send">
                           <router-link to="/register">Đăng ký một tài khoản</router-link>
                            <button type="submit" class="ass1-btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            email: '',
            password:''
        }
    }
}
</script>

<style>
</style>