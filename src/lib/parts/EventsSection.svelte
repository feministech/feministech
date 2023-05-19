<script lang="ts">
	import { ArrowRight, CalendarDays, Clock } from 'lucide-svelte';
	import Button from '$lib/elements/Button.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';

	const eventsLimit = 4;
</script>

<Section id="eventos">
	<div class="events">
		<div class="title">
			<Title align="left" pretitle="Nossos">Eventos</Title>
		</div>
		<ul class="events-grid">
			{#each Array(eventsLimit + 2) as uwu, i}
				<li class="event">
					<a href="/" class="banner">
						<figure
							style="background-image: url('https://source.unsplash.com/featured/1280x72{i}')"
						/>
					</a>
					{#if i < eventsLimit}
						<h1 class="title">Feministalk Hacktoberfest</h1>
						<p class="description">
							Feministalk sobre a Hacktoberfest, abordando Git, Github e Open Source
						</p>
						<ul class="metadata">
							<li><CalendarDays size={16} /> 08/10/2023</li>
							<li><Clock size={16} /> 20:00</li>
						</ul>
						<Button rounded outline>Saiba mais <ArrowRight size={16} /></Button>
					{/if}
				</li>
			{/each}
			<div class="events-fade-out">
				<Button href="/">Ver todos os eventos</Button>
			</div>
		</ul>
	</div>
</Section>

<style lang="scss">
	@import '../scss/vars';

	.events {
		display: flex;
		gap: 6rem;

		.title {
			flex-shrink: 0;
		}

		&-grid {
			position: relative;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 2rem;
			grid-row-gap: 2rem;
			flex-grow: 1;

			.event {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				.banner figure {
					width: 100%;
					aspect-ratio: 16 / 9;
					border-radius: 1rem;
					background-position: center;
					background-repeat: no-repeat;
					background-size: 100%;
					transition: all 0.2s ease;

					&:hover {
						background-size: 105%;
					}
				}

				.title {
					font-family: $font-title;
					font-size: 20px;
					font-weight: 700;
				}

				.metadata {
					display: flex;
					gap: 0.75rem;

					li {
						display: flex;
						align-items: center;
						gap: 0.25rem;
					}
				}
			}
		}

		&-fade-out {
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			width: 100%;
			height: 13.5rem;
			background: linear-gradient(rgba($background-color, 0.75) 0%, $background-color 75%);
		}
	}
</style>
