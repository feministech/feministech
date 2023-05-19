<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/elements/Button.svelte';
	import Card from '$lib/elements/Card.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section id="projetos">
	<Title pretitle="Construindo Juntes">Projetos da comunidade</Title>
	<ul class="projects-grid">
		{#each Array(6) as uwu}
			<li class="project">
				<Card>
					<div class="project-content">
						<figure class="project-icon" />
						<h2 class="project-title">Feministech Podcast</h2>
						<p class="project-description">
							Discutimos assuntos ligados ao mundo da tecnologia, criando um conteúdo mais diverso e
							inclusivo num mercado tão pouco representado.
						</p>
						<Button rounded>Ver projeto <ArrowRight size={16} /></Button>
					</div>
				</Card>
			</li>
		{/each}
	</ul>
</Section>

<style lang="scss">
	@import '../scss/vars';

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}

	.project {
		&-content {
			display: flex;
			flex-direction: column;
			gap: 12px;
			padding: 1rem;
		}

		&-icon {
			height: 4rem;
			width: 4rem;
			border-radius: 1rem;
			background-image: url('/images/projects/feministech-podcast.webp');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		&-title {
			font-family: $font-title;
			font-weight: 700;
			font-size: 20px;
		}
	}
</style>
