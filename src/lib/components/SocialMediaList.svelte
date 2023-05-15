<script lang="ts">
	import { siGithub, siInstagram, siTwitter, siTwitch, siYoutube, siLinkedin } from 'simple-icons';
	import DevIcon from '$lib/icons/DevIcon.svelte';

	const socials = [
		{ icon: siGithub, href: '/' },
		{ icon: siInstagram, href: '/' },
		{ icon: siTwitter, href: '/' },
		{ icon: siTwitch, href: '/' },
		{ icon: siYoutube, href: '/' },
		{ icon: DevIcon, href: '/' },
		{ icon: siLinkedin, href: '/' }
	];
</script>

<ul class="socials">
	{#each socials as social}
		<li>
			<a href="/" target="_blank" rel="noopener noreferrer">
				{#if 'svg' in social.icon}
					{@html social.icon.svg}
				{:else}
					<svelte:component this={social.icon} />
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import '../scss/vars';

	.socials {
		display: flex;
		gap: 1.25rem;

		:global(svg) {
			width: 1.5rem;
			height: 1.5rem;
			fill: rgba($primary, 0.5);
			transition: all 0.2s ease;
		}

		a:hover :global(svg) {
			fill: $primary;
		}
	}
</style>
