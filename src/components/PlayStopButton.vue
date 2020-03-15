<template>
	<v-container class="d-flex justify-center">
		<v-btn
			fab
			class="elevation-1"
			x-large
			@click="
				togglePlay();
				handleClick();
			"
		>
			<v-icon
				class="display-3"
				v-if="!$store.state.isPlaying"
			>
				mdi-play</v-icon
			>
			<v-icon class="display-3" v-if="$store.state.isPlaying">
				mdi-stop</v-icon
			>
		</v-btn>
	</v-container>
</template>
<script>
export default {
	name: "play-stop-button",
	methods: {
		togglePlay() {
			this.$set(
				this.$store.state,
				"isPlaying",
				!this.$store.state.isPlaying
			);
		},
		handleClick() {
			this.$emit("click");
		}
	}
};
</script>
<style scoped></style>
