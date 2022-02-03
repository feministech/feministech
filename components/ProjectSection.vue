<template>
  <section id="projetos" class="project-section">
    <h1>Projetos</h1>

    <div class="projects">
      <ProjectCard
        projectName="Feministech Podcast"
        projectDescription="Nosso podcast discute assuntos ligados ao mundo da tecnologia, com pessoas que se identificam no feminino ou não bináries, criando um conteúdo mais diverso e inclusivo num mercado tão pouco representado."
        projectLink="https://anchor.fm/feministech"
      />

      <ProjectCard
        projectName="Artigos da Feministech"
        projectDescription="Artigos criados por participantes da Feministech, ensinando algo ou propondo uma discussão relacionada á tecnologia."
        projectLink="https://dev.to/feministech"
      />

      <ProjectCard
        projectName="Time de Streamers"
        projectDescription="Nosso time de streamers na Twitch, transmitindo lives de tecnologia, buscando ensinar e aprender juntes."
        projectLink="https://www.twitch.tv/team/livecodergirls"
      />

      <ProjectCard
        projectName="Bot da Feministech"
        projectDescription="Nosso bot que atua em chats da Twitch, divulgando e oferencendo comandos que facilitam a divulgação da palavra da Feministech."
        projectLink="https://github.com/feministech/feministech-bot"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
}
</script>

<style>
.project-section {
  background-color: whitesmoke;
}

.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2em 0 0 0;
  gap: 4em 1em;
}
</style>
