<template>
	<v-container class="px-8 fluid ma-0 d-flex justify-space-between">
		<div
			class="primary--text tempo-button"
			@click="singleInc(-1)"
			@mousedown="incTempo(-10)"
			@mouseup="stopInc"
			@touchstart="incTempo(-10)"
			@touchend="stopInc"
		>
			<div>-</div>
		</div>
		<v-card class="px-8 py-2  display-1"  outlined>
			{{ $store.state.tempo }}
		</v-card>
		<div
			class="tempo-button primary--text"
			@click="singleInc(1)"
			@mousedown="incTempo(10)"
			@mouseup="stopInc"
			@touchstart="incTempo(10)"
			@touchend="stopInc"
		>
			<div>+</div>
		</div>
	</v-container>
</template>
<script>
export default {
	name: "tempo-HUD",
	data: () => ({
		intervalId: null,
		timeoutId: null
	}),
	methods: {
		incTempo(inc) {
			this.timeoutId = setTimeout(() => {
				this.intervalId = setInterval(() => {
					//this.incTempo(inc);
					this.$store.state.tempo += inc;
				}, 250);
			}, 300);
			console.log(this.timeoutId);
		},
		stopInc() {
			clearTimeout(this.timeoutId);

			clearInterval(this.intervalId);
			console.log(this.timeoutId, 123);
		},
		singleInc(inc) {
			this.$store.state.tempo += inc;
		}
	}
};
</script>
<style scoped>
.tempo-button {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	line-height: 1;
}
.tempo-button > * {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
</style>
