<template>
		<v-card outlined>
				container
				{{$store.state.metronome[index]}}
		</v-card>
</template>
<script>
export default {
		name: "beat-container",
		props: ['index']
}
</script>
<style scoped></style>
