<template>
	<v-container class="pa-0 d-flex justify-space-between">
		<v-container
			class="d-flex switch-box  flex-column align-center pa-2 pb-0"
		>
			<v-container class="text-center pa-0 ma-0 mb-2 overline"
				>{{ $t("polymodeSwitch") }}
			</v-container>
			<v-switch
				v-model="$store.state.polymode"
				class="ma-0"
			></v-switch>
		</v-container>

		<v-container
			class="ma-0 pa-0 tap-box d-flex flex-column justify-center align-center"
		>
			<p class="overline">{{ $t("tapToChoose") }}</p>
			<v-container
				class=" ma-0 pa-0 d-flex justify-center align-center"
			>
				<v-card
					outlined
					class=" mx-2"
					:class="disabledWhilePlaying"
				>
					<v-menu
						:disabled="
							$store.state.isPlaying
						"
					>
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
					:class="disabledWhilePlaying"
				>
					<v-menu
						:disabled=" $store.state.isPlaying "
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
		disabledWhilePlaying: function() {
			return {
				"grey lighten-1": this.$store.state.isPlaying
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
.switch-box {
	width: 30vw;
}
.tap-box {
	width: 50vw;
}
.debug {
	border: solid black 1px;
}
</style>
