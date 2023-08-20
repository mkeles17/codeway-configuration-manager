<template>
    <form class="sign-in" @submit.prevent="signin">
        <div class="signin-text">
            Please sign in
        </div>
        <input 
            type="email" 
            class="email" 
            placeholder="E-mail address" 
            v-model="signin_form.email" 
        />
        <input 
            type="password" 
            class="password" 
            placeholder="Password" 
            v-model="signin_form.password" 
        />
        <button type="submit" class="signin-btn">
            Sign in
        </button> 
    </form>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue';
import { useUserStore } from '@/stores/index.js';

export default defineComponent({
    name: "LoginForm",
    setup() {
        const signin_form = ref({});
        const store = useUserStore();

        const signin = async () => {
            await store.signin(signin_form.value);
        }

        return {
            signin_form,
            signin
        }
    },
})
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.signin-text {
    font-family: 'FuturaPTLight', sans-serif;
    font-weight: 900;
    font-size: 1.35rem;
    color: #32325d;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 0.75rem;
}

.sign-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.email {
    border-radius: .5rem .5rem 0 0;
}

.password {
    border-radius: 0 0 .5rem .5rem;
}

.signin-btn {
    height: 2.5rem;
    //width: 17rem;
    background: $purple-gradient;
    margin-top: 0.75rem;
    font-size: 0.75rem;
    border-radius: .5rem;
}
</style> 


