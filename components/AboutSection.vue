<template>
  <section id="sobre" class="about-section">
    <h1>Sobre a Feministech</h1>
    <p>
      A Feministech é um
      <strong>grupo de pessoas que se identificam no feminino e não-bináries</strong>
      que produzem, consomem e compartilham conteúdo sobre tecnologia, em
      um ambiente diverso e inclusivo.
    </p>
    <p>
      O objetivo da Feministech é
      <strong>aumentar a representatividade de minorias no mundo da tecnologia</strong>
      , que além de serem minorias na tecnologia, também são minorias socias que
      precisam de mais espaço e alcance em todos os espaços.
    </p>

    <p>
      Uma das principais missões da Feministech é
      <strong>auxiliar e incentivar a produção de conteúdo dessas minorias</strong>, como
      <i>live coding</i>, vídeos, artigos, palestras,
      <i>podcasts</i> e eventos.
    </p>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style>
.about-section {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.about-section > h1,
strong {
  color: var(--pink);
}
</style>
