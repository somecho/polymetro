<template>
	<div>
		<div class="mobile-notice">{{ mobileNotice }}</div>
		<div id="app">
			<router-view />
			<!-- BOTTOM NAVIGATION -->
			<router-link to="/">POLYMETRO</router-link>
			<router-link to="/about">ABOUT</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		mobileNotice:
			"This web app is only available on mobile. Try it out on your phone!"
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
	#app {
		display: none;
	}
}
</style>
