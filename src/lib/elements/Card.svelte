<div class="card">
	<slot />
</div>

<style lang="scss">
	@import '../scss/vars';

	.card {
		background: #fff;
		border: 1px solid rgba(#000, 0.1);
		box-shadow: 0 0.25rem 0.5rem rgba(#000, 0.05);
		border-radius: 1rem;
	}
</style>
