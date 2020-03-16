<template>
	<v-container>
		<vue-p5 @setup="setup" @draw="draw"></vue-p5>
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
import VueP5 from "vue-p5";
import p5 from "p5";
import "p5/lib/addons/p5.sound";

export default {
	name: "main-ui",
	components: {
		BeatContainer,
		TempoHUD,
		PlayStopButton,
		PolyrhythmSelector,
		"vue-p5": VueP5
	},
	data: () => ({
		tempo: null,
		osc1: null,
		env1: null,
		timeout1: null,
		counter1: -1,
		osc2: null,
		env2: null,
		timeout2: null,
		counter2: -1
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

	mounted() {},

	methods: {
		toggleMetronome() {
			if (this.$store.state.isPlaying) {
				setTimeout(() => {
					this.loopA();
					this.loopB();
				}, 100);
			} else {
				clearTimeout(this.timeout1);
				clearTimeout(this.timeout2);
				this.counter1 = -1;
				this.counter2 = -1;
			}
		},
		setup(sketch) {
			var canvas = sketch.createCanvas(400, 400);
			canvas.style("display", "none");
			this.osc1 = new p5.SqrOsc();
			this.osc2 = new p5.SqrOsc();
			this.env1 = new p5.Envelope(0.0001, 1, 0.08, 0);
			this.env2 = new p5.Envelope(0.0001, 1, 0.08, 0);
		},

		draw() {},
		clickA(freq) {
			this.osc1.freq(freq);
			this.osc1.start();
			this.env1.play(this.osc1);
		},
		clickB(freq) {
			this.osc2.freq(freq);
			this.osc2.start();
			this.env2.play(this.osc2);
		},
		loopA() {
			let numBeats = this.$store.state.metronome[0].numBeats;
			let accents = this.$store.state.metronome[0].accents;
			this.counter1 = (this.counter1 + 1) % numBeats;
			if (accents[this.counter1] == 1) {
				this.clickA(987.77);
			} else if (accents[this.counter1] == 2) {
				this.clickA(1975.53);
			}
			this.timeout1 = setTimeout(
				this.loopA,
				this.clickADuration
			);
		},
		loopB() {
			let numBeats = this.$store.state.metronome[1].numBeats;
			let accents = this.$store.state.metronome[1].accents;
			if (this.$store.state.polymode) {
				this.counter2 = (this.counter2 + 1) % numBeats;
				if (accents[this.counter2] == 1) {
					this.clickB(659.25);
				} else if (accents[this.counter2] == 2) {
					this.clickB(1318.51);
				}
			}
			this.timeout2 = setTimeout(
				this.loopB,
				this.clickBDuration
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
