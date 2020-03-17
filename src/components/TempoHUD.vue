<template>
	<v-card
		outlined
		class="mt-4 py-2 d-flex justify-space-around align-center"
	>
		<v-btn
			fab
			class="elevation-1"
			@touchstart="toggleCount(-1)"
			@touchend="toggleCount(-1)"
			@mousedown="toggleCount(-1)"
			@mouseup="toggleCount(-1)"
		>
			<v-icon>mdi-minus</v-icon>
		</v-btn>
		<v-card class="px-4 py-2 my-2 headline" outlined>
			{{ $store.state.tempo }}
		</v-card>
		<v-btn
			fab
			class="elevation-1"
			@touchstart="toggleCount(1)"
			@touchend="toggleCount(1)"
			@mousedown="toggleCount(1)"
			@mouseup="toggleCount(1)"
			><v-icon>mdi-plus</v-icon>
		</v-btn>
	</v-card>
</template>
<script>
export default {
	name: "tempo-HUD",
	data: () => ({
		countOn: false,
		inc: 0
	}),
	methods: {
		toggleCount(inc) {
			this.countOn = !this.countOn;

			this.countOn ? (this.inc = inc) : (this.inc = 0);
		},
		updateTempo() {
			var newTempo = this.$store.state.tempo + this.inc;
			setTimeout(this.updateTempo, 50);
			this.$set(this.$store.state, "tempo", newTempo);
			//requestAnimationFrame(this.updateTempo);
		},
		debug() {}
	},
	created() {
		this.updateTempo();
	}
};
</script>
<style scoped></style>
