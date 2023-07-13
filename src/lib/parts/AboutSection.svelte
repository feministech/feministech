<script lang="ts">
	import BlobGroupPhoto from '$lib/blobs/BlobGroupPhoto.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section id="sobre">
	<Title pretitle="Sobre">A Feministech</Title>
	<div class="about">
		<div class="content">
			<p>
				A Feministech é uma <b>comunidade feminista de pessoas trans, não-binárias e mulheres cis</b> que
				produzem, consomem e compartilham conteúdo sobre tecnologia, enquanto constroem uma comunidade 
        diversa e inclusiva.
			</p>
			<p>
				O objetivo da Feministech é <b
					>aumentar a representatividade de minorias no mundo da tecnologia</b
				>, que além de serem minorias na tecnologia, também são minorias sociais que precisam de
				mais espaço e alcance em todos os espaços.
			</p>
			<p>
				Uma das principais missões da Feministech é <b
					>auxiliar e incentivar a produção de conteúdo dessas minorias</b
				>, como live coding, vídeos, artigos, palestras, podcasts e eventos.
			</p>
		</div>
		<div class="group-photo">
			<BlobGroupPhoto />
		</div>
	</div>
</Section>

<style lang="scss">
	@import '../scss/vars';

	.about {
		display: flex;
		align-items: center;
		gap: 2rem;

		.content {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			b {
				color: $primary;
				font-weight: 400;
			}
		}

		.group-photo {
			width: 30rem;
			flex-shrink: 0;
			margin-right: -3rem;
		}
	}

	@media (max-width: $layout-breakpoint-mobile) {
		.about {
			flex-direction: column;

			.group-photo {
				width: 100%;
				margin-right: unset;
			}
		}
	}
</style>
