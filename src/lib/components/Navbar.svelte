<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
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

	let isMobileMenuOpen = false;
	const toggleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

<svelte:body on:scroll={updateNav} />

<nav class="navbar" class:mobile-menu-open={isMobileMenuOpen}>
	<a href="/" class="logo">
		<FeministechLogoAlt />
	</a>

	<ul class="navbar-items">
		<li class="close">
			<button on:click={toggleMobileMenu}>
				<X />
			</button>
		</li>
		{#each menu as page}
			<li>
				<a
					href="/#{page.section}"
					class:active={activeSection == page.section}
					on:click={toggleMobileMenu}
				>
					{page.label}
				</a>
			</li>
		{/each}
	</ul>

	<button class="mobile-menu-toggle" on:click={toggleMobileMenu}>
		<Menu />
	</button>
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

				&.close {
					display: none;
				}
			}
		}

		.mobile-menu-toggle {
			display: none;
		}
	}

	.logo {
		display: flex;
		width: 2.25rem;
		height: 2.25rem;
	}

	@media (max-width: $layout-breakpoint-laptop) {
		.navbar {
			width: calc(100% - 8rem);
		}
	}

	@media (max-width: $layout-breakpoint-mobile) {
		.navbar {
			top: 1rem;
			left: 1rem;
			width: calc(100% - 2rem);

			.mobile-menu-toggle {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				aspect-ratio: 1 /1;
				background: none;
				border: none;
				color: $primary;
			}

			.navbar-items {
				position: fixed;
				top: calc(-1rem - 1px);
				left: calc(-1rem - 1px);
				background-color: $primary;
				flex-direction: column;
				width: 100vw;
				height: 100vh;
				font-size: 1.25rem;
				transition: all 0.2s ease;

				li a {
					color: #fff;
					width: 100%;
					text-align: center;
					justify-content: center;
				}

				.close {
					display: flex;
					justify-content: center;
					align-items: center;

					button {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 3rem;
						height: 3rem;
						border-radius: 50%;
						border: 2px solid #fff;
						background: none;
						color: #fff;
					}
				}
			}

			&:not(.mobile-menu-open) {
				.navbar-items {
					pointer-events: none;
					opacity: 0;
				}
			}
		}
	}
</style>
