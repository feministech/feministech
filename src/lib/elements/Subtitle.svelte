<script lang="ts">
	export let borderless = false;
</script>

<h2 class="section-title" class:borderless>
	<slot />
</h2>

<style lang="scss">
	.section-title {
		font-size: 20px;
		padding-bottom: 0.5rem;

		&:not(.borderless) {
			border-bottom: 1px solid rgba(#000, 0.1);
			margin-bottom: 1.25rem;
		}
	}
</style>
