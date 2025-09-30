<template>
    <section class="unseenPixelgrade">
        <div class="container">
            <div class="block__wrapper">

                <img src="@/assets/images/PixelgradePicture.png" alt="" class="pixelgrade__picture">

                <div class="block__right">
                    <div class="block__right-wrapp">

                        <h2 class="block__right-wrapp-title">
                            The unseen of spending three years at Pixelgrade
                        </h2>

                        <span class="block__right-wrapp-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </span>

                    </div>

                    <btnComponent :button-id="1" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import btnComponent from "@/components/common/btnComponent2/btnComponent.vue";

</script>

<style scoped lang="scss">
@use '@/components/sections/unseenPixelgrade/unseenPixelgrade.scss';

</style>

