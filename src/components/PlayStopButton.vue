<template>
	<v-container class="align-center d-flex justify-center py-2 px-0"
			>
					<span class="horizontal-line"></span>
		<v-btn
			fab
			outlined
			width="80"
			height="80"
			style="border:solid 1px #DADADA;"
			@click="
				togglePlay();
				handleClick();
			"
		>
			<v-icon
				class="accent-text display-3"
				v-if="!$store.state.isPlaying"
			>
				mdi-play</v-icon
			>
			<v-icon class="display-3" v-if="$store.state.isPlaying">
				mdi-stop</v-icon
			>
		</v-btn>
					<span class="horizontal-line"></span>
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
<style scoped>
.horizontal-line {
		display: block;
		width: 100vw;
		border-top: 1px solid #DADADA;
}
</style>
