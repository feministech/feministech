<script lang="ts">
	export let id = '';
</script>

<section class="section" {id}>
	<slot />
</section>

<style lang="scss">
	@import '../scss/vars';

	.section {
		width: 100%;
		max-width: $page-max-width;
	}
</style>
