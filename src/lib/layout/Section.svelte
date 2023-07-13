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

	@media (max-width: $layout-breakpoint-laptop) {
		.section {
			padding: 0 4rem;
		}
	}

	@media (max-width: $layout-breakpoint-mobile) {
		.section {
			padding: 0 1rem;

			&:first-child {
				padding-top: 8rem;
			}
		}
	}
</style>
