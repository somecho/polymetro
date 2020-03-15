<template>
	<div @touchend="cycleAccent">
		<v-icon
			color=" accent-4"
			v-if="accent == 2"
			class="display-1 cyan--text"
			:class="disabledClass"
			>mdi-circle</v-icon
		>
		<v-icon
			color="accent-3"
			v-if="accent == 1"
			class="cyan--text  display-1"
			:class="disabledClass"
			>mdi-circle-half-full</v-icon
		>
		<v-icon
			v-if="accent == 0"
			class="cyan--text display-1"
			:class="disabledClass"
			>mdi-circle-outline</v-icon
		>
	</div>
</template>
<script>
export default {
	name: "beat-element",
	props: ["metronomeIndex", "beatIndex"],
	data: () => ({
		polymodeActive: false,
		isSecondary: false
	}),

	computed: {
		accent: function() {
			return this.$store.state.metronome[this.metronomeIndex]
				.accents[this.beatIndex];
		},
		disabledClass: function() {
			return {
				"grey--text":
					this.metronomeIndex == 1 &&
					!this.$store.state.polymode,
				"text--lighten-2":
					this.metronomeIndex == 1 &&
					!this.$store.state.polymode
			};
		}
	},
	methods: {
		cycleAccent() {
			var newAccent = (this.accent + 1) % 3;
			if (
				this.$store.state.polymode &&
				this.metronomeIndex == 1
			) {
				this.$set(
					this.$store.state.metronome[
						this.metronomeIndex
					].accents,
					this.beatIndex,
					newAccent
				);
			}
		}
	}
};
</script>
<style scoped></style>
