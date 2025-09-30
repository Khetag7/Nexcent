<template>
    <section class="helpingBusiness">
        <div class="container">
            <div class="block__wrapper">

                <div class="block__left">

                    <h2 class="block__left-title">
                        Helping a local <span>business reinvent itself</span>
                    </h2>

                    <p class="block__left-text">
                        We reached here with our hard work and dedication
                    </p>

                </div>

                 <div class="block__right">

                    <div class="block__right-group-first">
                        <div v-for="card in firstTwoCards" :key="card.number" class="block__right-card">
                            <img :src="card.logo" alt="" class="block__right-logo">
                            <div class="block__right-card-texts">
                                <h3 class="block__right-card-texts-title">
                                    {{ card.number }}
                                </h3>
                                <p class="block__right-card-texts-text">
                                    {{ card.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="block__right-group-last">
                        <div v-for="card in lastTwoCards" :key="card.number" class="block__right-card">
                            <img :src="card.logo" alt="" class="block__right-logo">
                            <div class="block__right-card-texts">
                                <h3 class="block__right-card-texts-title">
                                    {{ card.number }}
                                </h3>
                                <p class="block__right-card-texts-text">
                                    {{ card.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import HelpingIcon from '@/assets/images/HelpingIcon.svg'
import HelpingIcon2 from '@/assets/images/HelpingIcon-2.svg'
import HelpingIcon3 from '@/assets/images/HelpingIcon-3.svg'
import HelpingIcon4 from '@/assets/images/HelpingIcon-4.svg'


const cardsObj = ref([
    {
        logo: HelpingIcon,
        number: '2,245,341',
        text: 'Members'
    },
    {
        logo: HelpingIcon2,
        number: '828,867',
        text: 'Event Bookings'
    },
    {
        logo: HelpingIcon3,
        number: '46,328',
        text: 'Clubs'
    },
    {
        logo: HelpingIcon4,
        number: '1,926,436',
        text: 'Payments'
    }
])

const firstTwoCards = computed(() => cardsObj.value.slice(0,2))
const lastTwoCards = computed(() => cardsObj.value.slice(2,4))


</script>

<style scoped lang="scss">
@use '@/components/sections/HelpingBusiness/HelpingBusiness.scss';

</style>