<script lang="ts">
	export let pretitle = '';
	export let align: 'left' | 'center' | 'right' = 'center';
</script>

{#if pretitle}
	<p class="pretitle" class:left={align == 'left'} class:right={align == 'right'}>
		{pretitle}
	</p>
{/if}

<h1 class="title" class:left={align == 'left'} class:right={align == 'right'}>
	<slot />
</h1>

<style lang="scss">
	@import '../scss/vars';

	.title,
	.pretitle {
		text-align: center;

		&.left {
			text-align: left;
		}

		&.right {
			text-align: right;
		}
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
