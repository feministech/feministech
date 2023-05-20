<script lang="ts">
	import FeministechLogoAlt from '$lib/brand/FeministechLogoAlt.svelte';

	const pages = [
		{ label: 'Início', href: '/' },
		{ label: 'A Feministech', href: '/#sobre' },
		{ label: 'Eventos', href: '/' },
		{ label: 'Projetos', href: '/' },
		{ label: 'Participantes', href: '/' },
		{ label: 'Contato', href: '/' }
	];
</script>

<nav class="navbar">
	<a href="/" class="logo">
		<FeministechLogoAlt />
	</a>
	<ul class="navbar-items">
		{#each pages as page, i}
			<li>
				<a href={page.href} class:active={i == 0}>{page.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@import '../scss/vars';

	.navbar {
		position: fixed;
		top: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: $page-max-width;
		height: 4rem;
		background-color: rgba(#f8f2f0, 0.5);
		border: 1px solid rgba($primary, 0.2);
		border-radius: 1rem;
		padding: 0 0.5rem 0 1.5rem;
		backdrop-filter: blur(1rem);
		z-index: 10;

		&-items {
			display: flex;
			height: 100%;

			li {
				height: 100%;

				a {
					display: flex;
					align-items: center;
					height: 100%;
					padding: 0 1rem;
					color: $primary;
					text-decoration: none;

					&.active {
						text-decoration: underline;
						text-decoration-style: wavy;
						text-underline-offset: 0.25rem;
					}
				}
			}
		}
	}

	.logo {
		display: flex;
		width: 2.25rem;
		height: 2.25rem;
	}
</style>
