<template>
    <section class="fringillaFree">
        <div class="container">
            <div class="block__flex">
                <h2 class="block__flex-title">
                    Pellentesque suscipit fringilla libero eu.
                </h2>

                <btnComponent :button-id="3" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import btnComponent from "@/components/common/btnComponent/btnComponent.vue";

</script>

<style scoped lang="scss">
@use '@/components/sections/fringillaFree/fringillaFree.scss'; 

</style>