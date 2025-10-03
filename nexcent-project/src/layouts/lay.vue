<template>
    <mainHeader />

    <main>
      <slot></slot>
    </main>
    
    <mainFooter />
</template>
<script setup lang="ts">
  import mainHeader from "@/components/mainHeader/mainHeader.vue";
  import mainFooter from "@/components/mainFooter/mainFooter.vue";

</script>
