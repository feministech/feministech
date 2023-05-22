<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import menu from '$lib/data/menu.json';
	import FeministechLogoAlt from '$lib/brand/FeministechLogoAlt.svelte';

	let activeSection = '';

	const offset = 128;
	const updateNav = () => {
		if (!browser) return;
		if (
			$page.url.pathname === '/' &&
			Math.floor(document.body.scrollTop) ===
				Math.floor(document.body.scrollHeight - document.body.offsetHeight)
		) {
			activeSection = menu[menu.length - 1].section;
			return;
		}
		const currentRegion = [...document.querySelectorAll('main > section')]
			.map((el) => {
				const box = el.getBoundingClientRect();
				return {
					id: el.id,
					pos: box.height + box.top - offset
				};
			})
			.find((section) => section.pos >= 0);
		if (currentRegion) activeSection = currentRegion.id;
	};

	page.subscribe(updateNav);

	onMount(() => {
		if (!browser) return;
		updateNav();
	});
</script>

<svelte:body on:scroll={updateNav} />

<nav class="navbar">
	<a href="/" class="logo">
		<FeministechLogoAlt />
	</a>

	<ul class="navbar-items">
		{#each menu as page}
			<li>
				<a href="/#{page.section}" class:active={activeSection == page.section}>
					{page.label}
				</a>
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
