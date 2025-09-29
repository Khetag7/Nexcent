<template>
    <section class="manageCommunity">
        <div class="container">
            <div class="block__wrapper">
                
                <div class="block__titles">
                    <h2 class="block__titles-title">
                        Manage your entire community <br> in a single system
                    </h2>

                    <h2 class="block__titles-title-mobile">
                        Manage your entire community in a single system
                    </h2>

                    <p class="block__titles-text">
                        Who is Nextcent suitable for?
                    </p>
                </div>
                
                <div class="block__cards">
                    <div v-for="card in cards" :key="card.id" class="block__card">
                        <div class="block__card-top">
                            <img :src="card.logo" alt="">
                            <h3 class="block__card-title">{{ card.name[0] }}<br>{{ card.name[1] }}</h3>
                        </div>
                        
                        <span class="block__card-text">{{ card.text }}</span>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ManageCommunityIcon from '@/assets/images/ManageCommunityIcon.png'
import ManageCommunityIcon2 from '@/assets/images/ManageCommunityIcon-2.png'
import ManageCommunityIcon3 from '@/assets/images/ManageCommunityIcon-3.png'

const cards = ref([
    {
        id: 0,
        logo: ManageCommunityIcon,
        name: ['Membership', 'Organisations'],
        text: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
        id: 1,
        logo: ManageCommunityIcon2,
        name: ['National', 'Associations'],
        text: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
        id: 2,
        logo: ManageCommunityIcon3,
        name: [`Clubs And`, `Groups`],
        text: 'Our membership management software provides full automation of membership renewals and payments'
    }
])
</script>

<style scoped lang="scss">
@use '@/components/sections/ManageCommunity/ManageCommunity.scss';

</style>