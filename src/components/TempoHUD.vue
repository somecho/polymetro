<template>
	<v-card outlined class="d-flex justify-space-around align-center">
		<v-btn rounded class="elevation-1" color="cyan lighten-5">
			<v-icon>mdi-minus</v-icon>
		</v-btn>
		<v-card class="px-4 py-2 my-2" outlined>
			{{ $store.state.tempo }}
		</v-card>
		<v-btn
			color="cyan lighten-5"
			rounded
			class="elevation-1"
			@click="incTempo"
			><v-icon>mdi-plus</v-icon>
		</v-btn>
	</v-card>
</template>
<script>
export default {
	name: "tempo-HUD",
		methods: {
				incTempo(){
						this.$set(this.$store.state, 'tempo', this.$store.state.tempo+1)
				}
		}
};
</script>
<style scoped></style>
