<script lang="ts">
	import { siGithub, siInstagram, siTwitter, siLinkedin, type SimpleIcon } from 'simple-icons';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import DevIcon from '$lib/icons/DevIcon.svelte';
	import Card from '$lib/elements/Card.svelte';
	import { findPerson } from '$lib/utils/people';
	import type { Dayjs } from 'dayjs';
	import type { SvelteComponent } from 'svelte';

	type Schedule = {
		title: string;
		datetime: Dayjs;
		hosts: string[];
	}[];

	type Socials = {
		[site: string]: {
			icon: typeof SvelteComponent | SimpleIcon;
			url: string;
		};
	};

	export let schedule: Schedule = [];

	const socials: Socials = {
		github: {
			icon: siGithub,
			url: 'https://github.com/'
		},
		twitter: {
			icon: siTwitter,
			url: 'https://twitter.com/'
		},
		instagram: {
			icon: siInstagram,
			url: 'https://instagram.com/'
		},
		devto: {
			icon: DevIcon,
			url: 'https://dev.to/'
		},
		linkedin: {
			icon: siLinkedin,
			url: 'https://linkedin.com/in/'
		}
	};
</script>

<ul class="timetable">
	{#each schedule as event}
		<li class="timetable-item">
			<div class="time">{event.datetime.format('HH:mm')}</div>
			<div class="event">
				<h3 class="event-title">
					{event.title}
				</h3>
				<ul class="event-presenters">
					{#each event.hosts as hostID (hostID)}
						{@const host = findPerson(hostID)}
						<li class="presenter" in:fade animate:flip={{ duration: 300 }}>
							<Card>
								<div class="presenter-inner">
									<img
										src={host?.avatar ||
											`https://unavatar.io/${hostID}?fallback=https://github.com/${hostID}.png`}
										alt=""
										class="presenter-avatar"
									/>
									<div class="presenter-info">
										<p class="presenter-name">{host?.name}</p>
										<p class="presenter-pronouns">({host?.pronouns})</p>
										<p class="presenter-socials">
											{#each Object.keys(host?.socials || []) as siteName}
												{@const social = socials[siteName]}
												{@const username = host?.socials[siteName]}
												<a href="{social.url}{username}">
													{#if 'svg' in social.icon}
														{@html social.icon.svg}
													{:else}
														<svelte:component this={social.icon} />
													{/if}
												</a>
											{/each}
										</p>
									</div>
								</div>
							</Card>
						</li>
					{/each}
				</ul>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import '../scss/vars';

	.timetable {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		&-item {
			display: flex;
			gap: 2rem;

			.time {
				width: 2.5rem;
				flex-shrink: 0;
			}

			.event {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				gap: 1rem;

				&-title {
					font-weight: bold;
				}

				&-presenters {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-column-gap: 1rem;
					grid-row-gap: 1rem;
					width: 100%;

					.presenter {
						&-inner {
							display: flex;
							gap: 0.75rem;
							padding: 0.75rem;
						}

						&-avatar {
							width: 5rem;
							height: 5rem;
							border-radius: 0.75rem;
						}

						&-info {
							display: flex;
							flex-direction: column;
							height: 5rem;
						}

						&-name {
							font-size: 1.25rem;
						}

						&-pronouns {
							font-size: 14px;
						}

						&-socials {
							display: flex;
							gap: 0.75rem;
							margin-top: auto;

							a {
								display: flex;
								position: relative;

								&::before {
									content: '';
									position: absolute;
									top: -0.375rem;
									left: -0.375rem;
									width: 2rem;
									height: 2rem;
									border-radius: 50%;
									transition: all 0.2s ease;
								}

								&:hover::before {
									background-color: rgba($primary, 0.1);
								}
							}

							:global(svg) {
								width: 1.25rem;
								height: 1.25rem;
								fill: $primary;
							}
						}
					}
				}
			}
		}
	}
</style>
