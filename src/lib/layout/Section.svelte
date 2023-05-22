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

		&:first-child {
			padding-top: calc(6rem + 8rem); // espaço da navbar + padding
		}
	}
</style>
