<template>
	<v-container class="about px-4">
			<v-btn @click="()=>{$emit('click')}" icon class="back-icon">
			<v-icon>mdi-keyboard-backspace</v-icon>
		</v-btn>
		<h1>Polymetro</h1>
		<p class="text-justify">
			{{ $t("appDescription") }}
		</p>
		<p>
			{{ $t("appInstruction") }}
		</p>
		<v-divider class="my-4"></v-divider>
		<h2>{{ $t("install") }}</h2>
		<p>{{ $t("installDescription") }}</p>
		<h4>{{ $t("safariTitle") }}</h4>
		<p>
			{{ $t("safari") }}
		</p>

		<h4>{{ $t("chromeTitle") }}</h4>
		<p>
			{{ $t("chrome") }}
		</p>
		<h4>{{ $t("firefoxTitle") }}</h4>
		<p>
			{{ $t("firefox") }}
		</p>
		<v-divider class="my-4"></v-divider>
		<p class="caption">Polymetro 2.0.0</p>
		<p class="caption">
			© 2020 <a href="https://www.notion.so/Showcase-8ef960883c934f67bf8c9ee90d716cdc">Samuel Cho</a>
		</p>
	</v-container>
</template>
<script>
export default {
	name: "about-app"
};
</script>
<style scoped>
.about {
	top: 8vh;
	position: absolute;
	height: 92vh;
	overflow-y: auto;
}
.back-icon {
		position: fixed;
		top: 1vh;
		left: 2vw;
}
</style>
