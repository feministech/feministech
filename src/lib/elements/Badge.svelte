<span class="badge">
	<slot />
</span>

<style lang="scss">
	@import '../scss/vars';

	.badge {
		padding: 0.5rem 1rem;
		background-color: rgba($primary, 0.05);
		border: 1px solid $primary;
		border-radius: 2rem;
		color: $primary;
		font-size: 14px;
		font-weight: 400;
		transition: all 0.2s ease;
	}
</style>
