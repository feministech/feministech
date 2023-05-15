<script lang="ts">
	export let pretitle = '';
</script>

{#if pretitle}
	<p class="pretitle">{pretitle}</p>
{/if}

<h1 class="title">
	<slot />
</h1>

<style lang="scss">
	@import '../scss/vars';

	.title,
	.pretitle {
		text-align: center;
	}

	.pretitle {
		color: $primary;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin-bottom: 0.25rem;
	}

	.title {
		font-family: $font-title;
		font-weight: 700;
		font-size: 32px;
		margin-bottom: 2.25rem;
	}
</style>
