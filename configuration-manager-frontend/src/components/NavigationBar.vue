<template>
    <div class="navbar">
        <div class="logo-container">
            <img src="@/assets/images/icon.png" alt="App Logo" class="logo">
        </div>
        <div class="dropdown" @click="toggleDropdown">
            <div>
                <img src="@/assets/images/profile-icon.svg" alt="Profile Icon" class="logo">
                <span class="arrow"></span>
            </div>
            <ul class="dropdown-menu" v-if="isDropdownOpen">
                <span class="user-email">
                    {{ userMail }}
                </span>
                <li class="dropdown-menu-item" @click="store.signout">
                    <img src="@/assets/images/signout-icon.png" alt="Signout Icon" class="signout-icon">
                    Sign out
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { useUserStore } from '@/stores/index.js';

export default defineComponent({
    name: "NavigationBar",
    setup() {
        const store = useUserStore();

        const isDropdownOpen = ref(false);
        const userMail = store.user.email
        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        }

        return {
            store,
            userMail,
            isDropdownOpen,
            toggleDropdown
        }
    },
})
</script>
  
<style lang="scss" scoped>
@import '@/styles/variables';
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 15px 40px;
}

.logo {
    height: 25px;
}

.dropdown {
    position: relative;
    cursor: pointer;
}

.dropdown-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: white;
    position: relative;
    bottom: 7px;
}

.dropdown-menu {
    display: none;
    position: absolute;
    right: 0;
    background-color: $secondary-purple;
    list-style: none;
    padding: 10px;
    min-width: 200px; 
    margin-top: 0;
    z-index: 1; 
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.user-email {
    color: #1e1e2c;
    padding: 5px;
}

.dropdown-menu-item {
    display: flex;
    color: white;
    align-items: center;
    padding: 5px;
    //&:hover {
        //background-color: #555;
    //}
    &img {
        vertical-align: middle;
        margin-right: 10px; 
    }
}

.signout-icon {
  vertical-align: middle;
  margin-right: 8px; 
  width: 16px; 
  height: 16px;
}

</style>