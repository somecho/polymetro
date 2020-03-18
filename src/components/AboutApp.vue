<template>
	<v-container class="about pa-4">
		<h1>Polymetro</h1>
		<p class="text-justify">
		{{ $t('appDescription') }}
		</p>
		<p>
		{{ $t('appInstruction') }}
		</p>
		<v-divider class="my-4"></v-divider>
		<h2>{{ $t('install')}}</h2>
		<p>{{ $t('installDescription') }}</p>
		<h4>Chrome</h4>
		<p>
		{{ $t('chrome') }}
		</p>
		<h4>Firefox</h4>
		<p>
		{{ $t('firefox') }}
		</p>
		<h4>Safari</h4>
		<p>
		{{ $t('safari') }}
		</p>
		<v-divider class="my-4"></v-divider>
		<p class="caption">Polymetro 1.0.10</p>
		<p class="caption">© 2020 <a href="https://samuel-cho.net">Samuel Cho</a></p>
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
