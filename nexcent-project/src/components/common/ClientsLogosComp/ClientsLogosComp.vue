<template>
    <div class="logoes__block">
        <img v-for="(client, index) in clientsLogoes"
        :src="client.logo" 
        :alt="client.alt"
        :key="index"
        class="clients__logo">
    </div>
</template>

<script setup lang="ts">
defineProps<Props>()

interface ClientLogoes
{
    logo: string,
    alt: string
}

interface Props
{
    clientsLogoes: ClientLogoes[]
}
</script>

<style scoped lang="scss">
@use '@/components/common/ClientsLogosComp/ClientsLogosComp.scss'
</style>