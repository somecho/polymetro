<template>
	<v-app>
		<div class="mobile-notice">{{ mobileNotice }}</div>
		<div id="app" class="app">
			app
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
