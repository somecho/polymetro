<template>
	<v-card outlined class="cyan lighten-5">
		<v-container class="d-flex  justify-space-between ma-0 pa-0 pl-4 align-center">
			<v-card
				class="d-flex  flex-column align-center pa-2 pb-0"
				outlined
			>
				<v-container
					
					class=" text-center pa-0 ma-0 overline"
					>second metronome</v-container
				>
				<v-switch
					v-model="$store.state.polymode"
					class="ma-0"
				></v-switch>
			</v-card>
			<v-container >
			<v-container class=" ma-0 pa-0 d-flex flex-column justify-center align-center">
			<p class="overline ">Click to select</p>
			<v-container class=" ma-0 pa-0 d-flex justify-center align-center">
				<v-card outlined class=" mx-2" :class="disabledWhilePlaying">
					<v-menu  :disabled="$store.state.isPlaying">
						<template
							v-slot:activator="{
								on
							}"
						>
							<v-container
								v-on="on"
								class=" px-4 py2"
							>
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
				<v-card
					outlined
					class=" mx-2"
					:class="disabledClass"
				>
					<v-menu
						:disabled="
							!$store.state
								.polymode ||
								$store.state
									.isPlaying
						"
					>
						<template
							v-slot:activator="{
								on
							}"
						>
							<v-container
								v-on="on"
								class=" px-4 py-3"
							>
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
			</v-container>
		</v-container>
	</v-card>
</template>
<script>
export default {
	name: "polyryhthm-selector",
	data: () => ({
		polymode: false
	}),
	computed: {
		metrum: function() {
			let a = [];
			for (let i = 1; i < 10; i++) {
				a.push(i);
			}
			return a;
		},
		disabledClass: function() {
			return {
				grey:
					!this.$store.state.polymode ||
					this.$store.state.isPlaying,
				"lighten-3":
					!this.$store.state.polymode ||
					this.$store.state.isPlaying
			};
		},
		disabledWhilePlaying: function() {
			return {
				grey: this.$store.state.isPlaying,
				"lighten-3": this.$store.state.isPlaying
			};
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
<style scoped>
.cont1 {
		border: solid black;
}
</style>
