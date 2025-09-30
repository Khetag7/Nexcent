<template>
    <section class="howToDesign">
        <div class="container g-flex">
    
            <img src="@/assets/images/HowToDesignPicture.png" alt="" class="howToDesign__picture">
            
            <div class="block__right">
                <div class="block__right-wrapp">
                    <h2 class="block__right-title">How to design your site footer like we did</h2>
                    <span class="block__right-text">
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </span>
                </div>
                
                <btnComponent :button-id="1" />
            </div>
            
        </div>
    </section>
</template>

<script setup lang="ts">
import btnComponent from "@/components/common/btnComponent2/btnComponent.vue";

</script>

<style scoped lang="scss">
@use '@/components/sections/HowToDesign/HowToDesign.scss';

</style>