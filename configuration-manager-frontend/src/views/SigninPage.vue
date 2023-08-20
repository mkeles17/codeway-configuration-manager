<template>
    <div class="signin">
        <img src="@/assets/images/icon.png" alt="App Logo" class="logo">
        <div class="login-form">
            <LoginForm/>
        </div>
        <span class="copyright-text"> Codeway © 2023</span>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'Signin Page',
    components: {
        LoginForm
    },
    setup() {
        
        return {
            LoginForm
        }
    },
}
</script>


<style lang="scss" scoped>
@import '@/styles/variables';

.signin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.logo {
    margin-top: 7rem;
    height: 10rem;
}

.login-form {
    width: 18rem;
}

.copyright-text {
    margin-top: 3rem;
    color: #6b757d;
}
</style>
