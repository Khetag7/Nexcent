<template>
	<lay>
		<growBusiness />
		<ourClients />
		<ManageCommunity />
		<unseenPixelgrade />
		<helpingBusiness />
		<HowToDesign />
		<AllCustomers />
		<CaringMarketing />
		<fringillaFree />

	</lay>
</template>
<script setup lang="ts">
	import lay from "@/layouts/lay.vue"
	import growBusiness from "@/components/sections/growBusiness/growBusiness.vue";
	import ourClients from "@/components/sections/ourClients/ourClients.vue";
	import ManageCommunity from "@/components/sections/ManageCommunity/ManageCommunity.vue";
	import unseenPixelgrade from "@/components/sections/unseenPixelgrade/unseenPixelgrade.vue";
	import HelpingBusiness from "@/components/sections/HelpingBusiness/HelpingBusiness.vue";
	import HowToDesign from "@/components/sections/HowToDesign/HowToDesign.vue";
	import AllCustomers from "@/components/sections/AllCustomers/AllCustomers.vue";
	import CaringMarketing from "@/components/sections/CaringMarketing/CaringMarketing.vue";
	import fringillaFree from "@/components/sections/fringillaFree/fringillaFree.vue";


</script>