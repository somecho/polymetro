<template>
	<v-container>
		<beat-container
			v-for="(beatContainer, index) in $store.state.metronome"
			:key="beatContainer.id"
			:index="index"
		></beat-container>
	</v-container>
</template>
<script>
import BeatContainer from "@/components/BeatContainer.vue";
export default {
	name: "main-ui",
	components: {
		BeatContainer
	}
};
</script>
<style scoped></style>
