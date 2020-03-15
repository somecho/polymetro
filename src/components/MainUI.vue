<template>
	<v-container>
		<beat-container
			v-for="(beatContainer, index) in $store.state.metronome"
			:key="beatContainer.id"
			:index="index"
		/>
		<tempo-HUD />
		<play-stop-button />
	</v-container>
</template>
<script>
import BeatContainer from "@/components/BeatContainer.vue";
import TempoHUD from "@/components/TempoHUD.vue";
import PlayStopButton from "@/components/PlayStopButton.vue";
export default {
	name: "main-ui",
	components: {
		BeatContainer,
		TempoHUD,
		PlayStopButton
	}
};
</script>
<style scoped></style>
