<template>
  <footer>
    <nav class="footer-nav">
      <a
        href="https://github.com/feministech/codigo-de-conduta"
        class="footer-anchor"
        target="_blank"
        >Código de Conduta</a
      >
      <hr class="divider solid" />
      <a href="#sobre" class="footer-anchor">Sobre a comunidade</a>
      <a href="#partipantes" class="footer-anchor">Quem participa</a>
      <a href="#projetos" class="footer-anchor">Projetos</a>
      <a href="#eventos" class="footer-anchor">Eventos</a>
      <a href="#contatos" class="footer-anchor">Contatos</a>
    </nav>

    <div class="right-col">
      <div class="footer-social-links">
        <SocialLinks color="purple" justify="flex-end" />
      </div>
      <h2 class="footer-title">Feministech</h2>
      <strong class="made-with"> Feito com ❤️ </strong>
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
  background-color: var(--purple);
  padding: 5vh 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.footer-nav > a {
  text-align: left;
}

.footer-nav,
.right-col {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}

.footer-social-links {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.2em;
  align-items: baseline;
}

.made-with {
  display: flex;
  flex-direction: column;
  height: 30%;
}

.footer-anchor,
.footer-title,
.made-with {
  color: white;
  text-align: right;
}

.divider {
  border-top: 3px solid white;
}
</style>
