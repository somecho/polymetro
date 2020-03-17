<template>
	<v-app>
		<div class="mobile-notice">{{ mobileNotice }}</div>
		<v-container
			id="app"
			class="d-flex align-center pa-2 cyan accent-4 app root-container"
		>
			<v-card outlined class="ma-0 mb-6 elevation-4">
				<router-view />
			</v-card>

			<v-bottom-navigation
				fixed
				class="px-0 cyan accent-4 elevation-0 d-flex justify-space-between"
				height="35"
			>
				<router-link to="/"
					><v-btn class="px-2"
						>POLYMETRO</v-btn
					></router-link
				>
				<router-link to="about"
					><v-btn class="mx-0 px-0"
						><v-icon
							>mdi-information</v-icon
						></v-btn
					></router-link
				>
			</v-bottom-navigation>
		</v-container>
	</v-app>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		mobileNotice:
			"this app is only available on mobile. Try it out on your phone!",
	}),
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
}
@media (min-width: 850px) {
	.app {
		display: none;
	}
}
</style>
