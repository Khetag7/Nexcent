<template>
    <section class="caringMarketing">
        <div class="container">
            <div class="block__wrapper">
                <div class="block__titles">
                    <h2 class="block__titles-title">Caring is the new marketing</h2>
                    <p class="block__titles-paragraph">
                        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
                    </p>
                </div>
                <div class="block__cards">
                    <div v-for="card in ImagesCardsObj" class="block__card">
                        <img :src="card.img" alt="">
                        
                        <div class="block__card-content">
                            <h4 class="block__card-content-title">{{ card.text }}</h4>

                            <router-link to="#Readmore" class="allCustomers__btn">
                                <p class="allCustomers__btn-text">Readmore</p>
                                <img src="@/assets/images/VectorAllCustomers.svg" alt="">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Blog1 from '@/assets/images/blog-1.png'
import Blog2 from '@/assets/images/blog-2.png'
import Blog3 from '@/assets/images/blog-3.png'

const ImagesCardsObj = ref([
    {
        img: Blog1,
        text: 'Creating Streamlined Safeguarding Processes with OneRen'
    },
    {
        img: Blog2,
        text: 'What are your safeguarding responsibilities and how can you manage them?'
    },
    {
        img: Blog3,
        text: 'Revamping the Membership Model with Triathlon Australia'
    }
])
</script>

<style scoped lang="scss">
@use '@/components/sections/CaringMarketing/CaringMarketing.scss'; 

</style>