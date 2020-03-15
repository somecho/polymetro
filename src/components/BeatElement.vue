<template>
		<div>
				{{accent}}
				<slot></slot>
		</div>
</template>
<script>
export default {
		name: "beat-element",
		props: ['accent']
}
</script>
<style scoped></style>
