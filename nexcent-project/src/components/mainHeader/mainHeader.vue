<template>
    <header>
        <div class="container g-flex">
            <router-link to="/" class="header__logo">
                <img src="@/assets/images/Logo.png" alt="Nexcent Logo">
            </router-link>
            
            <nav class="header__navigation" :class="{ 'active': isMenuOpen }" @click="closeMenu">
                <ul class="header__list">
                    <li v-for="item in items" :key="item.id">
                        <router-link 
                        :to="item.path" 
                        class="header__list-el"
                        :class="{ 'active-link': $route.path === item.path }"
                        @click="closeMenu"
                        >
                        <span>{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
            
            <div class="mobile-menu-buttons">
                <router-link to="/#login" class="header__entrance-el-login" @click="closeMenu">
                    <span class="header__entrance-text-login">Login</span>
                </router-link>
                <router-link to="/#signUp" class="header__entrance-el-signUp" @click="closeMenu">
                    <span class="header__entrance-text-signUp">Sign up</span>
                </router-link>
            </div>
        </nav>
        
        <div class="header__entrance">
            <router-link to="/#login" class="header__entrance-el-login">
                <span class="header__entrance-text-login">Login</span>
            </router-link>
            <router-link to="/#signUp" class="header__entrance-el-signUp">
                <span class="header__entrance-text-signUp">Sign up</span>
            </router-link>
        </div>
        
        <div class="header__burger-mobile" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
            <div></div>
            <div class="burger__div-center"></div>
            <div></div>
        </div>
        
    </div>
</header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { watch } from "vue";
import { useRoute } from 'vue-router'; 
import { useHeaderStore } from '@/stores/HeaderStore'

const store = useHeaderStore()
const items = computed(()=>store.items)
const route = useRoute() 
const isMenuOpen = ref(false)

const toggleMenu = () => 
{
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => 
{
    isMenuOpen.value = false
}

watch(route, () => 
{
    closeMenu()
})

</script>

<style scoped lang="scss">
@use '@/components/mainHeader/mainHeader.scss';
</style>