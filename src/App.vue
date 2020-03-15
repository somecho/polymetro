<template>
	<v-app>
		<div class="mobile-notice">{{ mobileNotice }}</div>
		<v-container id="app" class="app root-container">
			<v-card class="mb-1">
				<router-view />
			</v-card>
			<v-tabs hide-slider>
				<router-link to="/">
					<v-tab>polymetro</v-tab>
				</router-link>
				<router-link to="/about">
					<v-tab>about</v-tab>
				</router-link>
			</v-tabs>
		</v-container>
	</v-app>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		mobileNotice:
			"this app is only available on mobile. Try it out on your phone!"
	})
};
</script>
<style>
@media (max-width: 600px) {
	.mobile-notice {
		display: none;
	}
}
@media (min-width: 600px) {
	.app {
		display: none;
	}
}
</style>
