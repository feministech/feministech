<template>
  <div class="background grey">
    <div class="content blue">
      <h1>Projetos</h1>

      <p>A Feministech tem diversos projetos, alguns destes sendo:</p>

      <div class="projects">
        <Projeto
          projectName="Feministech Podcast"
          projectDescription="Nosso podcast discute assuntos ligados ao mundo da tecnologia, com pessoas que se identificam no feminino ou não binárias, criando um conteúdo mais diverso e inclusivo num mercado tão pouco representado"
          projectLink="https://anchor.fm/feministech"
        />

        <Projeto
          projectName="Artigos da Feministech"
          projectDescription="Artigos criados por pessoas membras da Feministech, ensinando algo ou propondo uma discussão relacionada á tecnologia"
          projectLink="https://dev.to/feministech"
        />

        <Projeto
          projectName="Time de Streamers"
          projectDescription="Nosso time de streamers na Twitch, transmitindo lives de tecnologia, buscando ensinar e aprender juntes"
          projectLink="https://www.twitch.tv/team/livecodergirls"
        />

        <Projeto
          projectName="Feministech-bot"
          projectDescription="Nosso bot que atua em chats da Twitch, divulgando e oferencendo comandos que facilitam a divulgação da palavra da Feministech"
          projectLink="https://github.com/feministech/feministech-bot"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjetosComponents',
}
</script>

<style>
@import './styles/contentComponents.css';

.projects {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100vh;
}
</style>
