<script lang="ts">
	import menu from '$lib/data/menu.json';
	import SocialMediaList from './SocialMediaList.svelte';
</script>

<footer class="footer">
	<nav class="links">
		{#each menu as page}
			<a href="/#{page.section}">{page.label}</a>
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

	@media (max-width: $layout-breakpoint-mobile) {
		.footer {
			padding: 3rem 0;
			margin-top: 6rem;

			.links {
				justify-content: center;
				flex-wrap: wrap;
				gap: 1rem;
			}
		}
	}
</style>
