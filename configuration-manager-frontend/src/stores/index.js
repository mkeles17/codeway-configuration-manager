import { defineStore } from 'pinia';
import router from '@/router/index.js';
import { auth } from '@/services/firebase.js';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const useUserStore = defineStore('user', {
    state: () => ({ user: null }),

    getters: {},

    actions: {
        SET_USER(user) {
            this.user = user;
        },

        CLEAR_USER() {
            this.user = null;
        },

        async signin(form) {
            const { email, password } = form;
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (e) {
                switch (e.code) {
                    case 'auth/user-not-found':
                        alert('User not found');
                        break;
                    case 'auth/wrong-password':
                        alert('Wrong password');
                        break;
                    default:
                        alert(e.message);
                }
                return;
            }

            this.SET_USER(auth.currentUser);
            //commit('SET_USER', auth.currentUser);

            router.push('/');
        },

        async signout() {
            await signOut(auth);

            this.CLEAR_USER();
            //commit('CLEAR_USER');

            router.push('/signin');
        },

        async fetchUser() {
            auth.onAuthStateChanged(async (user) => {
                if (user === null) {
                    this.CLEAR_USER();
                } else {
                    this.SET_USER(user);

                    if (router.isReady() && router.currentRoute.value.path === '/signin') {
                        router.push('/');
                    }
                }
            });
        }
    }
});
