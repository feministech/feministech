<script lang="ts">
	import Button from '$lib/elements/Button.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section id="contato">
	<div class="cta">
		<h1 class="title">Fale com a gente!</h1>
		<p class="subtitle">
			Para entrar em contato com a Feministech, nos envie um e-mail em
			<a href="mailto:oifeministech@gmail.com">oifeministech@gmail.com</a>
		</p>
		<Button light href="mailto:oifeministech@gmail.com">Entre em contato</Button>
	</div>
</Section>

<style lang="scss">
	@import '../scss/vars';

	.cta {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 4rem 18rem;
		gap: 1.5rem;
		background-color: $primary;
		color: #fff;
		border-radius: 2rem;

		&::before {
			content: '';
			position: absolute;
			bottom: -2rem;
			width: 56rem;
			height: 5rem;
			background-color: rgba($primary, 0.5);
			border-radius: 50%;
			filter: blur(2rem);
			z-index: -1;
		}

		.title {
			font-family: $font-title;
			font-size: 40px;
			font-weight: 700;
		}

		.subtitle {
			line-height: 1.25;
		}

		a {
			color: #fff;
		}
	}
</style>
