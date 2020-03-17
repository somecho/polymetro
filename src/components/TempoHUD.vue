<template>
	<v-card
		outlined
		class="cyan lighten-5 mt-4 py-2 d-flex justify-space-around align-center"
	>
		<v-btn
			fab
			class="elevation-1"
			@click="singleInc(-1)"
			@pointerdown="incTempo(-10)"
			@pointerup="stopInc"
			@mousedown="incTempo(-10)"
			@mouseup="stopInc"
			@touchstart="incTempo(-10)"
			@touchend="stopInc"
			
		>
			<v-icon>mdi-minus</v-icon>
		</v-btn>
		<v-card class="px-4 py-2 my-2 headline" outlined>
			{{ $store.state.tempo }}
		</v-card>
		<v-btn
			fab
			class="elevation-1"
			@click="singleInc(1)"
			@pointerdown="incTempo(10)"
			@pointerup="stopInc"
			@mousedown="incTempo(10)"
			@mouseup="stopInc"
			@touchstart="incTempo(10)"
			@touchend="stopInc"
			><v-icon>mdi-plus</v-icon>
		</v-btn>
	</v-card>
</template>
<script>
export default {
	name: "tempo-HUD",
	data: () => ({
		intervalId: null,
			timeoutId: null,
	}),
	methods: {
		incTempo(inc) {
				this.timeoutId = setTimeout(()=>{
			this.intervalId = setInterval(() => {
				//this.incTempo(inc);
					this.$store.state.tempo += inc
			}, 250);
				}, 300)
		},
		stopInc() {
			clearTimeout(this.timeoutId);
				clearInterval(this.intervalId)

		},
			singleInc(inc){
					this.$store.state.tempo += inc
			}
	}
};
</script>
<style scoped></style>
