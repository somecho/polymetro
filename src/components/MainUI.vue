<template>
	<v-container>
		<beat-container
			v-for="(beatContainer, index) in $store.state.metronome"
			:key="beatContainer.id"
			:index="index"
		/>
		<tempo-HUD />
		<play-stop-button @click="toggleMetronome" />
		<polyrhythm-selector />
	</v-container>
</template>
<script>
import BeatContainer from "@/components/BeatContainer.vue";
import TempoHUD from "@/components/TempoHUD.vue";
import PlayStopButton from "@/components/PlayStopButton.vue";
import * as Tone from "tone";
import PolyrhythmSelector from "@/components/PolyrhythmSelector.vue";

export default {
	name: "main-ui",
	components: {
		BeatContainer,
		TempoHUD,
		PlayStopButton,
		PolyrhythmSelector
	},
	data: () => ({
		tempo: null,
		clickA: null,
		timeoutA: null,
		timeoutGroupA: [],
		clickB: null,
		timeoutB: null,
		timeoutGroupB: [],
		synthParams: {
			oscillator: { type: "triangle" },
			envelope: {
				attack: 0,
				decay: 0.1,
				sustain: 0,
				release: 0
			}
		}
	}),
	computed: {
		clickADuration: function() {
			// in milliseconds
			return (60 / this.$store.state.tempo) * 1000;
		},
		clickBDuration: function() {
			var rootTempo = this.$store.state.tempo;
			var rootNumBeats = this.$store.state.metronome[0]
				.numBeats;
			var secondaryNumBeats = this.$store.state.metronome[1]
				.numBeats;
			var secondaryTempo =
				(rootTempo / rootNumBeats) * secondaryNumBeats;
			return (60 / secondaryTempo) * 1000;
		}
	},

	mounted() {
			Tone.context.latencyHint = "interactive"
		this.tempo = this.$store.state.tempo;
		this.clickA = new Tone.Synth(this.synthParams).toMaster();
		this.clickB = new Tone.Synth(this.synthParams).toMaster();
	},

	methods: {
		toggleMetronome() {
			if (this.$store.state.isPlaying) {
				this.loopClickA();
				this.loopClickB();
			} else {
				clearTimeout(this.timeoutA);
				clearTimeout(this.timeoutB);
				for (
					let i = 0;
					i < this.timeoutGroupA.length;
					i++
				) {
					clearTimeout(this.timeoutGroupA[i]);
				}
				for (
					let i = 0;
					i < this.timeoutGroupB.length;
					i++
				) {
					clearTimeout(this.timeoutGroupB[i]);
				}
			}
		},
		soundClickA(note) {
			this.clickA.triggerAttackRelease(note, "16n");
		},
		soundClickB(note) {
			if (this.$store.state.polymode) {
				this.clickB.triggerAttackRelease(note, "16n");
			}
		},
		loopClickA() {
			var numBeatsA = this.$store.state.metronome[0].numBeats;
			var accentsA = this.$store.state.metronome[0].accents;
			for (let i = 0; i < numBeatsA; i++) {
				let pitch;
				if (accentsA[i] == 0) {
						continue;
				} else if (accentsA[i] == 1) {
					pitch = "A5";
				} else {
					pitch = "A6";
				}
				this.timeoutGroupA[i] = setTimeout(() => {
					this.soundClickA(pitch);
				}, i * this.clickADuration + 140);
			}
			this.timeoutA = setTimeout(
				this.loopClickA,
				this.clickADuration * numBeatsA
			);
		},
		loopClickB() {
			var numBeatsB = this.$store.state.metronome[1].numBeats;
			var accentsB = this.$store.state.metronome[1].accents;
			for (let i = 0; i < numBeatsB; i++) {
				let pitch;
				if (accentsB[i] == 0) {
					pitch = "";
				} else if (accentsB[i] == 1) {
					pitch = "C6";
				} else {
					pitch = "C5";
				}
				this.timeoutGroupB[i] = setTimeout(() => {
					this.soundClickB(pitch);
				}, i * this.clickBDuration + 150);
			}
			this.timeoutB = setTimeout(
				this.loopClickB,
				this.clickBDuration * numBeatsB
			);
		}
	},
	watch: {
		"$store.state.tempo": function(val) {
			this.tempo = val;
		}
	}
};
</script>
<style scoped></style>
