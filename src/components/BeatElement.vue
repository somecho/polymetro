<template>
	<div @click="cycleAccent" class="pa-0 ma-0">
		<v-icon
			v-if="accent == 2"
			class="ma-0 primary--text  display-1"
			:class="disabledClass"
		>
			mdi-circle
		</v-icon>
		<v-icon
			v-if="accent == 1"
			class="ma-0 primary--text  display-1"
			:class="disabledClass"
		>
			mdi-circle-half-full
		</v-icon>
		<v-icon
			v-if="accent == 0"
			class="ma-0 primary--text  display-1"
			:class="disabledClass"
		>
			mdi-circle-outline
		</v-icon>
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
				"text--lighten-5":
					this.metronomeIndex == 1 &&
					!this.$store.state.polymode
			};
		},
//		icon: function() {
//			if (this.accent == 2) {
//				return "mdi-circle";
//			} else if (this.accent == 1) {
//				return "mdi-circle-half-full";
//			} else if (this.accent == 0) {
//				return "mdi-circle-outline";
//			}
//		}
	},
	methods: {
		cycleAccent() {
			var newAccent = (this.accent + 1) % 3;
			if (
				(this.$store.state.polymode &&
					this.metronomeIndex == 1) ||
				this.metronomeIndex == 0
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
