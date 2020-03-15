import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		metronome: [
			{
				id: "1",
				numBeats: 4,
				accents: [2, 1, 1, 1]
			},
			{
				id: "2",
				numBeats: 3,
				accents: [0, 0, 0]
			}
		],
		tempo: 120,
		isPlaying: false,
			polymode: false
	}
});
