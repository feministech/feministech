<script lang="ts">
	export let href = '';
	export let rounded = false;
	export let outline = false;
	export let light = false;
</script>

<a {href} class="button" class:rounded class:outline class:light>
	<slot />
</a>

<style lang="scss">
	@import '../scss/vars';

	.button {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		width: fit-content;
		height: fit-content;
		padding: 1rem 1.5rem;
		background-color: $primary;
		color: #fff;
		text-decoration: none;
		border: none;
		border-radius: 0.5rem;
		box-shadow: 0 0 1.5rem rgba($primary, 0.25);
		transition: all 0.2s ease;

		&.rounded {
			padding: 0.5rem 1rem;
			border-radius: 1.5rem;
			font-size: 14px;
		}

		&.outline {
			background-color: rgba($primary, 0.05);
			border: 1px solid $primary;
			color: $primary;
			box-shadow: none;

			&:hover {
				background-color: $primary;
				color: #fff;
			}
		}

		&.light {
			background-color: #fff;
			color: $primary;
		}
	}
</style>
