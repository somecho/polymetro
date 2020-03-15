<template>
	<v-app>
		<div class="mobile-notice">{{ mobileNotice }}</div>
		<div id="app" class="app root-container">
			<router-view />
			app
			<v-tabs hide-slider=true>
				<v-tab>
					<router-link to="/">
						polymetro
					</router-link>
				</v-tab>
				<v-tab>
					<router-link to="/about">
						about
					</router-link>
				</v-tab>
			</v-tabs>
		</div>
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
