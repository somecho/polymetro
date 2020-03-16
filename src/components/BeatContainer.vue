<template>
	<v-card outlined class="elevation-1 mb-3 py-1">
		<v-container class="d-flex justify-space-between pa-1">
			<beat-element
				v-for="(beat, beatIndex) in metronomeObject.accents"
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
	computed: {
		metronomeObject: function() {
			return this.$store.state.metronome[this.index];
		}
	},
	props: ["index"],
	components: {
		BeatElement
	}
};
</script>
<style scoped></style>
