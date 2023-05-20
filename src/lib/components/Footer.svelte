<script lang="ts">
	import SocialMediaList from './SocialMediaList.svelte';

	// FIXME: reuse from navbar
	const pages = [
		{ label: 'Início', href: '/' },
		{ label: 'A Feministech', href: '/#sobre' },
		{ label: 'Eventos', href: '/' },
		{ label: 'Projetos', href: '/' },
		{ label: 'Participantes', href: '/' },
		{ label: 'Contato', href: '/' }
	];
</script>

<footer class="footer">
	<nav class="links">
		{#each pages as page}
			<a href={page.href}>{page.label}</a>
		{/each}
	</nav>
	<SocialMediaList />
	<p class="footnote">Feito com <span>💜</span> pela comunidade da Feministech</p>
</footer>

<style lang="scss">
	@import '../scss/vars';

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 2.5rem;
		padding: 4rem 0;
		background-color: #fff;
		border-top: 1px solid rgba(#000, 0.1);
		margin-top: 8rem;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		a {
			color: rgba($primary, 0.5);
			text-decoration: none;
			transition: all 0.2s ease;

			&:hover {
				color: $primary;
			}
		}
	}

	.footnote {
		font-size: 12px;
		color: rgba($primary, 0.5);

		span {
			color: $primary;
		}
	}
</style>
