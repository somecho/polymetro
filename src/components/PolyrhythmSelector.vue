<template>
	<v-card outlined class="cyan lighten-5">
		<v-container class="d-flex justify-space-between align-center">
			<v-card class="d-flex flex-column align-center pa-2 pb-0" outlined>
					<v-container class=" text-center pa-0 ma-0 overline">second metronome</v-container>
					<v-switch v-model="$store.state.polymode" class="ma-0"></v-switch >
			</v-card>

					<v-container class="d-flex justify-end align-center headline">
				<v-card outlined class="px-4 py-2 mx-2">
					<v-menu 
							>
						<template
							v-slot:activator="{
								on
							}"
						>
							<v-container v-on="on" class="pa-1">
								{{
									$store
										.state
										.metronome[0]
										.numBeats
								}}
							</v-container>
						</template>
						<v-list>
							<v-list-item
								v-for="(item,
								index) in metrum"
								:key="index"
								@click="
									setBeat(
										0,
										item
									)
								"
							>
								{{ item }}
							</v-list-item>
						</v-list>
					</v-menu>
				</v-card>
				:
				<v-card outlined class=" px-4 py-2 mx-2" :class="disabledClass">
					<v-menu :disabled="!$store.state.polymode">
						<template
							v-slot:activator="{
								on
							}"
						>
							<v-container v-on="on" class="pa-1">
								{{
									$store
										.state
										.metronome[1]
										.numBeats
								}}
							</v-container>
						</template>
						<v-list>
							<v-list-item
								v-for="(item,
								index) in metrum"
								:key="index"
								@click="
									setBeat(
										1,
										item
									)
								"
							>
								{{ item }}
							</v-list-item>
						</v-list>
					</v-menu>
				</v-card>
			</v-container>
		</v-container>
	</v-card>
</template>
<script>
export default {
	name: "polyryhthm-selector",
		data: ()=>({
				polymode: false,
		}),
	computed: {
		metrum: function() {
			let a = [];
			for (let i = 1; i < 10; i++) {
				a.push(i);
			}
			return a;
		},
			disabledClass: function(){
					return {
							"grey": !this.$store.state.polymode,
							"lighten-2": !this.$store.state.polymode
					}
			}
	},
	methods: {
		setBeat(metronomeIndex, beat) {
			this.$set(
				this.$store.state.metronome[metronomeIndex],
				"numBeats",
				beat
			);

			this.$set(
				this.$store.state.metronome[metronomeIndex],
				"accents",
				[]
			);
			for (let i = 0; i < beat; i++) {
				let accent = 1;

				if (i == 0) {
					accent = 2;
				}
				this.$store.state.metronome[
					metronomeIndex
				].accents.push(accent);
			}
		}
	}
};
</script>
<style scoped></style>
