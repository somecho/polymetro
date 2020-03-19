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
			<v-toolbar dense>
				<v-btn icon @click="overlay = !overlay">
					<v-icon class="teal--text">
							mdi-translate
					</v-icon>
				</v-btn>
				<v-spacer />
				<v-toolbar-title>
					polymetro
				</v-toolbar-title>
				<v-spacer />
				<v-btn icon>
					<router-link to="about">
						<v-icon class="teal--text">
							mdi-information
						</v-icon>
					</router-link>
				</v-btn>
			</v-toolbar>

				<router-view />

			<!-- language select overlay -->

			<v-overlay :value="overlay">
				<v-item-group>
					<v-item
						v-slot:default="{
							active,
							toggle
						}"
						v-for="locale in locales"
						:key="locale.id"
					>
						<v-card
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
							class="my-4 px-4 py-2 text-center"
						>
							{{ locale.lang }}
						</v-card>
					</v-item>
				</v-item-group>
			</v-overlay>
		</v-content>
	</v-app>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
	name: "App",
	beforeMount() {
		this.delay(2000);
	},
	data: () => ({
		mobileNotice:
			"Polymetro is a webapp only available on mobile phones. Go to polymetro.xyz on your phone's browser to check it out!",
		overlay: false,
		locales: [
			{ id: 0, locale: "EN", lang: "English" },
			{ id: 1, locale: "DE", lang: "Deutsch" },
			{ id: 2, locale: "CN", lang: "中文" }
		]
	}),
	methods: {
		changeLocale(locale) {
			i18n.locale = locale;
			this.overlay = false;
		},
		delay(ms) {
			const startPoint = new Date().getTime();
			while (new Date().getTime() - startPoint <= ms) {
				/* wait */
			}
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
