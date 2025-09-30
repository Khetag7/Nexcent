<template>
    <router-link :to="buttonItem.path" class="btnComponent2">
        <p>
            {{ buttonItem.name }}
        </p>
        <img v-if="buttonItem.icon" :src="buttonItem.icon" alt="" />
    </router-link>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usebtnCompStore } from '@/stores/btnCompStore'

interface Props {
    buttonId: number; 
}

const props = defineProps<Props>();
const store = usebtnCompStore()

const buttonItem = computed(() => {
    return store.items.find(item => item.id === props.buttonId) || store.items[0];
});
</script>

<style scoped lang="scss">
@use '@/components/common/btnComponent2/btnComponent.scss';
</style>