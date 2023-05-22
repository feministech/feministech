<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/elements/Button.svelte';
	import Card from '$lib/elements/Card.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
	import projects from '$lib/data/projects.json';
</script>

<Section id="projetos">
	<Title pretitle="Construindo Juntes">Projetos da comunidade</Title>
	<ul class="projects-grid">
		{#each projects as project}
			<li class="project">
				<Card>
					<div class="project-content">
						<figure class="project-icon" style="background-image:url({project.icon})" />
						<h2 class="project-title">{project.title}</h2>
						<p class="project-description">
							{project.description}
						</p>
						<Button href={project.href} rounded>Ver projeto <ArrowRight size={16} /></Button>
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
			height: 100%;
			padding: 1rem;
		}

		&-icon {
			height: 3rem;
			width: 3rem;
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

		&-description {
			margin-bottom: auto;
		}
	}
</style>
