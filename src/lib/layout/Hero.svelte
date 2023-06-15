<script>
	import 'dayjs/locale/pt-br';
	import BlobGradientLavender from '$lib/blobs/BlobGradientLavender.svelte';
	import BlobGradientPink from '$lib/blobs/BlobGradientPink.svelte';
	import SocialMediaList from '$lib/components/SocialMediaList.svelte';
	import Logo3D from '$lib/components/logo-3d/Logo3D.svelte';
	import Badge from '$lib/elements/Badge.svelte';
	import Section from './Section.svelte';
	import { getNextEvent } from '$lib/utils/events';

	const nextEvent = getNextEvent();
</script>

<Section id="inicio">
	<div class="hero">
		<div class="hero-body">
			<div class="info">
				{#if nextEvent}
					<a href="/eventos/{nextEvent.id}" class="alert">
						<Badge>{nextEvent.date.locale('pt-br').format('DD [de] MMMM')}</Badge>
						{nextEvent.title}
					</a>
				{/if}
				<h1 class="title">Feita para <span>todes</span>.</h1>
				<p class="subtitle">
					A Feministech é uma comunidade feminista de pessoas trans, não-binárias e mulheres cis que
					produzem, consomem e compartilham conteúdo sobre tecnologia, enquanto constroem uma
					comunidade diversa e inclusiva.
				</p>
				<SocialMediaList />
			</div>
			<Logo3D />
		</div>
		<BlobGradientLavender />
		<BlobGradientPink />
	</div>
</Section>

<style lang="scss">
	@import '../scss/vars';

	.hero {
		position: relative;
		width: 100%;

		&-body {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}

	.info {
		display: flex;
		flex-direction: column;

		.alert {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			width: fit-content;
			padding-right: 0.375rem;
			margin-bottom: 0.5rem;
			color: #000;
			font-size: 14px;
			text-decoration: none;
			border-radius: 1rem;
			transition: all 0.2s ease;

			&:hover {
				background-color: rgba($primary, 0.05);
				box-shadow: 0 0 0 0.25rem rgba($primary, 0.05);

				:global(span) {
					background-color: $primary;
					color: #fff;
				}
			}
		}

		.title {
			font-size: 40px;
			font-weight: 700;
			margin-bottom: 0.75rem;

			span {
				color: $primary;
			}
		}

		.subtitle {
			max-width: 28rem;
			line-height: 1.5rem;
			margin-bottom: 1.75rem;
		}
	}

	@media (max-width: $layout-breakpoint-mobile) {
		.hero-body {
			flex-direction: column-reverse;
		}

		.info .title {
			font-size: 36px;
		}
	}
</style>
