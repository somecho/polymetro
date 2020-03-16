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
		osc: null,
		nextNotetime: null,
		nextNotetime2: null,
		timeout1: null,
		counter1: -1,
		timeout2: null,
		counter2: -1,
		audioContext: null
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
	methods: {
		toggleMetronome() {
			if (this.$store.state.isPlaying) {
				this.audioContext = new (window.AudioContext ||
					window.webkitAudioContext)();

				this.nextNotetime = this.audioContext.currentTime;
				this.nextNotetime2 = this.audioContext.currentTime;
				this.counter1 = -1;
				this.counter2 = -1;
				this.schedulerA();
				this.schedulerB();
			} else {
				this.audioContext.close();
				clearTimeout(this.timeout1);
				clearTimeout(this.timeout2);
			}
		},
		loopB() {
			let numBeats = this.$store.state.metronome[1].numBeats;
			let accents = this.$store.state.metronome[1].accents;
			if (this.$store.state.polymode) {
				this.counter2 = (this.counter2 + 1) % numBeats;
				if (accents[this.counter2] == 1) {
					this.clickB();
				} else if (accents[this.counter2] == 2) {
					this.clickB();
				}
			}
			this.timeout2 = setTimeout(
				this.loopB,
				this.clickBDuration
			);
		},
		playSound(time, freq) {
			this.osc = this.audioContext.createOscillator();
			this.osc.type = "square";
			this.osc.connect(this.audioContext.destination);
			this.osc.frequency.value = freq;
			this.osc.start(time);
			this.osc.stop(time + 0.05);
		},
		schedulerA() {
			let numBeats = this.$store.state.metronome[0].numBeats;
			let accents = this.$store.state.metronome[0].accents;

			while (
				this.nextNotetime <
				this.audioContext.currentTime + 0.1
			) {
				this.counter1 = (this.counter1 + 1) % numBeats;
				if (accents[this.counter1] == 1) {
					this.playSound(
						this.nextNotetime,
						987.77
					);
				} else if (accents[this.counter1] == 2) {
					this.playSound(
						this.nextNotetime,
						1975.53
					);
				}

				this.nextNotetime += this.clickADuration / 1000;
			}
			this.timeout1 = window.setTimeout(
				this.schedulerA,
				20.0
			);
		},
		schedulerB() {
			let numBeats = this.$store.state.metronome[1].numBeats;
			let accents = this.$store.state.metronome[1].accents;

			while (
				this.nextNotetime2 <
				this.audioContext.currentTime + 0.1
			) {
				this.counter2 = (this.counter2 + 1) % numBeats;
				if (this.$store.state.polymode) {
					if (accents[this.counter2] == 1) {
						this.playSound(
							this.nextNotetime2,
							659.25
						);
					} else if (
						accents[this.counter2] == 2
					) {
						this.playSound(
							this.nextNotetime2,
							1318.51
						);
					}
				}

				this.nextNotetime2 +=
					this.clickBDuration / 1000;
			}
			this.timeout2 = window.setTimeout(
				this.schedulerB,
				20.0
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
