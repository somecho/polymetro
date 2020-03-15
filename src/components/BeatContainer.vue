<template>
	<v-card outlined>
		<beat-element
			v-for="(beat, beatIndex) in $store.state.metronome[index]
				.accents"
			:key="beatIndex"
			:accent="beat"
			></beat-element>
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
