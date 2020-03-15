<template>
	<div @touchend="cycleAccent">
		<v-icon
			color="cyan accent-4"
			v-if="accent == 2"
			class="display-1"
			>mdi-circle</v-icon
		>
		<v-icon
			color="cyan accent-3"
			v-if="accent == 1"
			class="display-1"
			>mdi-circle-half-full</v-icon
		>
		<v-icon
			color="cyan accent-1"
			v-if="accent == 0"
			class="display-1"
			>mdi-circle-outline</v-icon
		>
	</div>
</template>
<script>
export default {
	name: "beat-element",
	props: ["metronomeIndex", "beatIndex"],
	computed: {
		accent: function() {
			return this.$store.state.metronome[this.metronomeIndex]
				.accents[this.beatIndex];
		}
	},
	methods: {
		cycleAccent() {
			var newAccent = (this.accent + 1) % 3;
			this.$set(
				this.$store.state.metronome[this.metronomeIndex]
					.accents,
				this.beatIndex,
				newAccent
			);
		}
	}
};
</script>
<style scoped></style>
