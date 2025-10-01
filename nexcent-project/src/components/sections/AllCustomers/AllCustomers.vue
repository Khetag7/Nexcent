<template>
    <section class="allCustomers">
        <div class="container g-flex">
            <img class="allCustomers__main-img" src="@/assets/images/MainCastomerImg.png" alt="">
            
            <div class="block__right">
                <div class="block__right-wrapper">
                    <span class="block__right-text">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </span>
                    <div class="block__right-info">
                        <h4 class="block__right-heading">
                            Tim Smith
                        </h4>
                        <p class="block__right-parahraph">
                            British Dragon Boat Racing Association
                        </p>
                    </div>
                </div>
                
                <div class="block__right-icons">
                    <div class="block__right-icons-images">
                        <img v-for="icon in IconsObj" :src="icon.icon" alt="">
                    </div>
                    
                    <router-link to="#meetAll" class="allCustomers__btn">
                        <p class="allCustomers__btn-text">Meet all customers</p>
                        <img src="@/assets/images/VectorAllCustomers.svg" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ClientLogo2 from '@/assets/images/LogoClients-2.svg'
import ClientLogo3 from '@/assets/images/LogoClients-3.svg'
import ClientLogo4 from '@/assets/images/LogoClients-4.svg'
import ClientLogo5 from '@/assets/images/LogoClients-5.svg'
import ClientLogo6 from '@/assets/images/LogoClients-6.svg'
import LogoCusomers from '@/assets/images/LogoCusomers.png'

const IconsObj = ref([
    {
        icon: LogoCusomers
    },
    {
        icon: ClientLogo2
    },
    {
        icon: ClientLogo3
    },
    {
        icon: ClientLogo4
    },
    {
        icon: ClientLogo5
    },
    {
        icon: ClientLogo6
    },
])
</script>

<style scoped lang="scss">
@use '@/components/sections/AllCustomers/AllCustomers.scss'; 
</style>