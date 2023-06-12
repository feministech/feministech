<script>
	import { Github, Twitter, Instagram } from 'lucide-svelte';
	import Card from '$lib/elements/Card.svelte';
</script>

<ul class="timetable">
	<li class="timetable-item">
		<div class="time">19:00</div>
		<div class="event">
			<h3 class="event-title">
				Roda de conversa: As diferentes visões na galáxia Developer Relations
			</h3>
			<ul class="event-presenters">
				<li class="presenter">
					<Card>
						<div class="presenter-inner">
							<figure class="presenter-avatar" />
							<div class="presenter-info">
								<p class="presenter-name">Morganna</p>
								<p class="presenter-pronouns">(ela/dela)</p>
								<p class="presenter-socials">
									<a href="/">
										<Github size={20} />
									</a>
									<a href="/">
										<Twitter size={20} />
									</a>
									<a href="/">
										<Instagram size={20} />
									</a>
								</p>
							</div>
						</div>
					</Card>
				</li>
				<li class="presenter">
					<Card>
						<div class="presenter-inner">
							<figure class="presenter-avatar" />
							<div class="presenter-info">
								<p class="presenter-name">Andreza Rocha</p>
								<p class="presenter-pronouns">(ela/dela)</p>
								<p class="presenter-socials">
									<a href="/">
										<Github size={20} />
									</a>
									<a href="/">
										<Twitter size={20} />
									</a>
									<a href="/">
										<Instagram size={20} />
									</a>
								</p>
							</div>
						</div>
					</Card>
				</li>
				<li class="presenter">
					<Card>
						<div class="presenter-inner">
							<figure class="presenter-avatar" />
							<div class="presenter-info">
								<p class="presenter-name">Larissa Vitoriano</p>
								<p class="presenter-pronouns">(ela/dela)</p>
								<p class="presenter-socials">
									<a href="/">
										<Github size={20} />
									</a>
									<a href="/">
										<Twitter size={20} />
									</a>
									<a href="/">
										<Instagram size={20} />
									</a>
								</p>
							</div>
						</div>
					</Card>
				</li>
				<li class="presenter">
					<Card>
						<div class="presenter-inner">
							<figure class="presenter-avatar" />
							<div class="presenter-info">
								<p class="presenter-name">Pachi Parra</p>
								<p class="presenter-pronouns">(ela/dela)</p>
								<p class="presenter-socials">
									<a href="/">
										<Github size={20} />
									</a>
									<a href="/">
										<Twitter size={20} />
									</a>
									<a href="/">
										<Instagram size={20} />
									</a>
								</p>
							</div>
						</div>
					</Card>
				</li>
			</ul>
		</div>
	</li>
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
							background-image: url(https://avatars.githubusercontent.com/u/10137?v=4);
							background-size: cover;
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
							gap: 0.5rem;
							margin-top: auto;

							a {
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
						}
					}
				}
			}
		}
	}
</style>
