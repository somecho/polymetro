<template>
	<v-app>
		<v-content>
			<!-- desktrop notice -->
			<div class="mobile-notice">
				<img src="@/assets/logo.svg" alt="" />
				<div>{{ mobileNotice }}</div>
			</div>

			<!-- actual ui -->
			<!-- TOOLBAR -->
			<v-toolbar flat dense class="mb-3 elevation-2">
				<v-btn icon @click="overlay = !overlay">
					<v-icon class="primary--text">
						mdi-cog
					</v-icon>
				</v-btn>
				<v-spacer />
				<v-toolbar-title>
					polymetro
				</v-toolbar-title>
				<v-spacer />
				<v-btn icon @click="drawer = !drawer">
					<v-icon class="primary--text">
						mdi-information
					</v-icon>
				</v-btn>
			</v-toolbar>
			<!-- MAINUI -->

			<router-view />
			<!-- ABOUT -->
			<v-navigation-drawer
				v-model="drawer"
				:width="screenWidth"
				absolute
				right
			>
				<about-app
					@click="drawer = !drawer"
				></about-app>
			</v-navigation-drawer>

			<!-- language select overlay -->

			<v-overlay :value="overlay" opacity="0.85">
				<v-item-group
					class="d-flex flex-column align-center"
				>
					<v-item>
						<h2>{{ $t("darkMode") }}</h2>
					</v-item>

					<v-item>
						<v-switch
							v-model="$vuetify.theme.dark"
						></v-switch>
					</v-item>
					<v-item>
						<h2>{{ $t("languages") }}</h2>
					</v-item>
					<v-item
						v-slot:default="{
							active,
							toggle
						}"
						v-for="locale in locales"
						:key="locale.id"
					>
						<v-card
							light
							:color="
								active
									? 'primary'
									: ''
							"
							@click="
								toggle,
									changeLocale(
										locale.locale
									)
							"
							class="my-2 px-4 py-2 text-center"
						>
							{{ locale.lang }}
						</v-card>
					</v-item>
					<v-btn icon @click="overlay = !overlay">
						<v-icon @class="display - 1">
							mdi-window-close
						</v-icon>
					</v-btn>
				</v-item-group>
			</v-overlay>
		</v-content>
	</v-app>
</template>

<script>
import i18n from "@/plugins/i18n";
import AboutApp from "@/components/AboutApp.vue";

export default {
	name: "App",
	components: {
		AboutApp
	},
	data: () => ({
		mobileNotice:
			"Polymetro is a webapp only available on mobile phones. Go to polymetro.xyz on your phone's browser to check it out!",
		overlay: false,
		drawer: false,
		darkSwitch: false,
		locales: [
			{ id: 0, locale: "EN", lang: "English" },
			{ id: 1, locale: "DE", lang: "Deutsch" },
			{ id: 2, locale: "CN", lang: "中文" }
		]
	}),
	mounted() {
		if (localStorage.locale) {
			i18n.locale = localStorage.locale;
		}
			if (localStorage.dark){
					this.$vuetify.theme.dark = JSON.parse(localStorage.dark)
			}
	},
	computed: {
		screenWidth() {
			return window.innerWidth;
		}
	},
	methods: {
		changeLocale(locale) {
			i18n.locale = locale;
			localStorage.locale = locale;
			this.overlay = false;
		},
		delay(ms) {
			const startPoint = new Date().getTime();
			while (new Date().getTime() - startPoint <= ms) {
				/* wait */
			}
		}
	},
		watch: {
				'$vuetify.theme.dark': function(val){
						localStorage.dark = val
				}
		}
};
</script>
<style>
@media (max-width: 850px) {
	#app {
		position: fixed;
		width: 100vw;
		height: 100vh;
	}
	.mobile-notice {
		display: none;
	}
	.bottom {
		position: fixed;
		bottom: 1vh;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.main-ui {
		min-width: 97vw;
	}
	.about-drawer {
		width: 100vw;
	}
}
@media (min-width: 850px) {
	.app {
		display: none;
	}
	.mobile-notice {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
}
</style>
