import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.teal.darken3,
				secondary: "#DADADA",
				accent: colors.black,
				disabled: colors.grey,
			},
			dark: {
				primary: colors.teal.darken3,
				secondary: "#DADADA",
				accent: "#DADADA",
				disabled: colors.black,
			}
		}
	}
});
