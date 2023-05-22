<script lang="ts">
	import { siGithub, siInstagram, siTwitter, siTwitch, siYoutube, siLinkedin } from 'simple-icons';
	import DevIcon from '$lib/icons/DevIcon.svelte';

	const socials = [
		{ icon: siGithub, href: 'https://github.com/feministech' },
		{ icon: siInstagram, href: 'https://instagram.com/feminis_tech' },
		{ icon: siTwitter, href: 'https://twitter.com/feminis_tech' },
		{ icon: siTwitch, href: 'https://twitch.tv/team/livecodergirls' },
		{ icon: siYoutube, href: 'https://youtube.com/c/feministech' },
		{ icon: DevIcon, href: 'https://dev.to/feministech' },
		{ icon: siLinkedin, href: 'https://linkedin.com/company/feministech' }
	];
</script>

<ul class="socials">
	{#each socials as social}
		<li>
			<a href={social.href} target="_blank" rel="noopener noreferrer">
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
