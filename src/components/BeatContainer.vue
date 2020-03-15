<template>
	<v-card outlined>
		<v-container class="d-flex justify-space-between">
			<beat-element
				v-for="(beat, beatIndex) in $store.state
					.metronome[index].accents"
				:key="beatIndex"
				:metronomeIndex="index"
				:beatIndex="beatIndex"
			/>
		</v-container>
	</v-card>
</template>
<script>
import BeatElement from "@/components/BeatElement.vue";

export default {
	name: "beat-container",
	props: ["index"],
	components: {
		BeatElement
	}
};
</script>
<style scoped></style>
