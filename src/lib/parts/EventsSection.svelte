<script lang="ts">
	import dayjs from 'dayjs';
	import { ArrowRight, CalendarDays, Clock } from 'lucide-svelte';
	import Button from '$lib/elements/Button.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
	import Ribbon from '$lib/elements/Ribbon.svelte';
	import { getSortedEvents } from '$lib/utils/events';

	const eventsLimit = 4;
	const eventsByDate = getSortedEvents().slice(0, eventsLimit + 2);
</script>

<Section id="eventos">
	<div class="events">
		<div class="title">
			<Title align="left" pretitle="Nossos">Eventos</Title>
		</div>
		<ul class="events-grid">
			{#each eventsByDate as event, i}
				{@const eventLink = `/eventos/${event.id}`}
				{@const hasPassed = event.date.isBefore(dayjs())}

				<li class="event" class:passed={hasPassed}>
					<a href={eventLink} class="banner">
						<figure style={event.banner && `background-image: url(${event.banner})`} />
						{#if hasPassed}
							<Ribbon>PASSADO</Ribbon>
						{/if}
					</a>
					{#if i < eventsLimit}
						<h1 class="title">{event.title}</h1>
						<p class="description">{event.description}</p>
						<ul class="metadata">
							<li><CalendarDays size={16} /> {event.date.format('DD/MM/YYYY')}</li>
							{#if event.time}
								<li><Clock size={16} /> {event.date.format('HH:mm')}</li>
							{/if}
						</ul>
						<Button href={eventLink} rounded outline>
							Saiba mais <ArrowRight size={16} />
						</Button>
					{/if}
				</li>
			{/each}
			<div class="events-fade-out">
				<Button href="/eventos">Ver todos os eventos</Button>
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
					background-image: url('/images/events/fallback.webp');
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
					margin-bottom: auto;

					li {
						display: flex;
						align-items: center;
						gap: 0.25rem;
					}
				}

				&.passed {
					.banner {
						position: relative;

						figure {
							filter: grayscale(1) brightness(1.75);
						}
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
			padding: 2rem 0;
			background: linear-gradient(rgba($background-color, 0.75) 0%, $background-color 75%);
		}
	}
</style>
