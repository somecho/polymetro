<template>
	<v-app>
		<div class="mobile-notice">{{ mobileNotice }}</div>
		<v-container id="app"  class="cyan accent-4 app root-container">
			<v-card class="mb-1">
				<router-view />
			</v-card>
			<v-tabs hide-slider class="bottom" background-color="cyan accent-4 " >
						<v-tab class="px-0" :ripple="false" ><router-link class="white--text" to="/">polymetro</router-link></v-tab>
					<v-tab class="px-0" :ripple="false"><router-link class="white--text" to="/about">about</router-link></v-tab>
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
@media (max-width: 850px) {
		#app {
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
			padding: 0 10px;
	}
}
@media (min-width: 850px) {
	.app {
		display: none;
	}
}

</style>
