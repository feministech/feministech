<template>
  <footer>
    <nav class="footerNav">
      <a href="#sobre" class="footerAnchor">Sobre a comunidade</a>
      <a href="#partipantes" class="footerAnchor">Quem participa</a>
      <a href="#projetos" class="footerAnchor">Projetos</a>
      <a href="#eventos" class="footerAnchor">Eventos</a>
      <a href="#contatos" class="footerAnchor">Contatos</a>
    </nav>

    <div class="thanks">
      <span class="thanksTitle"> Feministech </span>

      <span class="thanksText"> Feito com ❤️ </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent',
}
</script>

<style>
footer {
  background-color: #7109b6;
  height: 25vh;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
}

.footerNav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 700;
  margin-left: 10vw;
  padding: 1em;
}

.thanks {
  font-family: 'Nunito', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  text-align: center;
  margin-right: 10vw;
  margin-top: 8vh;
}

.thanksTitle {
  font-size: 3ch;
  font-weight: 700;
}

.thanksText {
  font-size: 2ch;
}

.footerAnchor {
  text-decoration: none;
  color: white;
  font-size: 2ch;
}
</style>
