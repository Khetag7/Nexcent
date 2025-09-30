<template>
	<lay>
		<growBusiness />
		<ourClients />
		<ManageCommunity />
		<unseenPixelgrade />


	</lay>
</template>
<script setup lang="ts">
	import lay from "@/layouts/lay.vue"
	import growBusiness from "@/components/sections/growBusiness/growBusiness.vue";
	import ourClients from "@/components/sections/ourClients/ourClients.vue";
	import ManageCommunity from "@/components/sections/ManageCommunity/ManageCommunity.vue";
	import unseenPixelgrade from "@/components/sections/unseenPixelgrade/unseenPixelgrade.vue";

	
</script>