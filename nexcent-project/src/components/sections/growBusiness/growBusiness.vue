<template>
    <section class="growBusiness">
        <div class="container">
            <div class="block__wrapper">
                <div class="slider">
                    <div class="slider__track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div class="slide">
                            <div class="block__left">
                                <div>
                                    <h1 class="block__left-title">
                                        Lessons and insights <span>from 8 years</span>
                                    </h1>
                                    <span class="block__left-text">
                                        Where to grow your business as a photographer: site or social media?
                                    </span>
                                </div>
                                <btnComponent :button-id="0" />
                            </div>
                            <div class="block__right">
                                <img src="@/assets/images/IlustrationBusiness.png" alt="Business Illustration">
                            </div>
                        </div>
                        
                        <div class="slide">
                            <div class="block__left">
                                <div>
                                    <h1 class="block__left-title">
                                        Grow your business <span>with AI tools</span>
                                    </h1>
                                    <span class="block__left-text">
                                        Discover how artificial intelligence can transform your photography business and increase revenue.
                                    </span>
                                </div>
                                <btnComponent :button-id="1" />
                            </div>
                        </div>
                        
                        <div class="slide">
                            <div class="block__left">
                                <div>
                                    <h1 class="block__left-title">
                                        Social media <span>strategies</span>
                                    </h1>
                                    <span class="block__left-text">
                                        Learn effective social media marketing techniques to attract more clients and grow your audience.
                                    </span>
                                </div>
                                <btnComponent :button-id="2" />
                            </div>
                        </div>
                    </div>
                    
                    <button class="slider__nav slider__nav--prev" @click="prevSlide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="#4CAF4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="slider__nav slider__nav--next" @click="nextSlide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#4CAF4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="block__circles">
                <div 
                    v-for="n in 3" 
                    :key="n"
                    :class="['circle', { active__circle: currentSlide === n - 1 }]"
                    @click="goToSlide(n - 1)"
                ></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import btnComponent from "@/components/common/btnComponent/btnComponent.vue";

const currentSlide = ref(0);
const totalSlides = 3;

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

const goToSlide = (index: number) => {
    currentSlide.value = index;
};

setInterval(nextSlide, 5000);
</script>

<style scoped lang="scss">
@use '@/components/sections/growBusiness/growBusiness.scss';
</style>