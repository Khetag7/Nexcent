<template>
    <section class="ourClients">
        <div class="container">
            <div class="wrapper__block">
                <div class="title__block">
                    <h2 class="title__block-heading">Our Clients</h2>
                    <span class="title__block-text">
                        We have been working with some Fortune 500+ clients
                    </span>
                </div>
                
                <ClientsLogosComp :clientsLogoes="clientsData" />

                <div class="clients__logoes-mobile">
                    <div>
                        <img :src="ClientLogo" alt="">
                        <img :src="ClientLogo2" alt="">
                        <img :src="ClientLogo3" alt="">
                    </div>
                    <div>
                        <img :src="ClientLogo4" alt="">
                        <img :src="ClientLogo5" alt="">
                        <img :src="ClientLogo6" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive} from 'vue'
import ClientLogo from '@/assets/images/LogoClients.svg'
import ClientLogo2 from '@/assets/images/LogoClients-2.svg'
import ClientLogo3 from '@/assets/images/LogoClients-3.svg'
import ClientLogo4 from '@/assets/images/LogoClients-4.svg'
import ClientLogo5 from '@/assets/images/LogoClients-5.svg'
import ClientLogo6 from '@/assets/images/LogoClients-6.svg'
import ClientsLogosComp from '@/components/common/ClientsLogosComp/ClientsLogosComp.vue'


const clientsData = ref([
    {
        logo: ClientLogo,
        alt: 'Client-Logo'
    },
    {
        logo: ClientLogo2,
        alt: 'Client-Logo-2'
    },
    {
        logo: ClientLogo3,
        alt: 'Client-Logo-3'
    },
    {
        logo: ClientLogo4,
        alt: 'Client-Logo-4'
    },
    {
        logo: ClientLogo5,
        alt: 'Client-Logo-5'
    },
    {
        logo: ClientLogo6,
        alt: 'Client-Logo-6'
    },
    {
        logo: ClientLogo3,
        alt: 'Client-Logo-7'
    }
])
</script>

<style scoped lang="scss">
@use '@/components/sections/ourClients/ourClients.scss';
</style>