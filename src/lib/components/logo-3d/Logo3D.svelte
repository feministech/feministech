<script>
	import { Canvas } from '@threlte/core';
	import Logo3DScene from './Logo3DScene.svelte';
</script>

<div class="logo-3d">
	<Canvas>
		<Logo3DScene />
	</Canvas>
</div>

<style lang="scss">
	@import '../../scss/vars';

	.logo-3d {
		width: 20rem;
		height: 20rem;
	}

	@media (max-width: $layout-breakpoint-mobile) {
		.logo-3d {
			width: 16rem;
			height: 16rem;
			margin-bottom: 2rem;
		}
	}
</style>
