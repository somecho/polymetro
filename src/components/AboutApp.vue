<template>
	<v-container class="about pa-4">
		<h1>Polymetro</h1>
		<p class="text-justify">
			Polymetro is a simple metronome that can play
			polyrhythms. Turn on the second metronome to practice
			polyrhythms!
		</p>
		<p>Tap on the circles to toggle accents. To change the rhythm, tap the numbers to select the rhythm you want.</p>
		<v-divider class="my-4"></v-divider>
		<h2>Install</h2>
		<p>This webapp can be installed as an app on your phone.</p>
		<h4>Chrome</h4>
		<p>
			Click on the menu icon and in the menu "Add to home
			screen".
		</p>
		<h4>Firefox</h4>
		<p>
			In the address bar, to the right of the page URL you
			should see a little house icon with a plus symbol in the
			middle. Click on it and '+ Add to home screen'.
		</p>
		<h4>Safari</h4>
		<p>
			Click on the share button (box with up arrow) and in the
			opening popup "Add to Home Screen".
		</p>
		<v-divider class="my-4"></v-divider>
		<p>Polymetro 1.0.0</p>
		<p>©2020 Samuel Cho</p>
	</v-container>
</template>
<script>
export default {
	name: "about-app"
};
</script>
<style scoped>
.about {
	max-height: 87.5vh;
	overflow-y: auto;
}
</style>
