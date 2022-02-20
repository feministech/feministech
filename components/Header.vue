<template>
  <header>
    <strong class="header-title">Feministech</strong>

    <nav class="header-nav">
      <a href="#sobre" class="header-anchor">Sobre a comunidade</a>
      <strong>|</strong>
      <a href="#partipantes" class="header-anchor">Quem participa</a>
      <strong>|</strong>
      <a href="#projetos" class="header-anchor">Projetos</a>
      <strong>|</strong>
      <a href="#eventos" class="header-anchor">Eventos</a>
      <strong>|</strong>
      <a href="#contatos" class="header-anchor">Contatos</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
@media screen and (min-width: 1001px) {
  header {
    background-color: var(--pink);
    padding: 5vh 8vw;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 1000px) {
  header {
    background-color: var(--pink);
    padding: 3vh 8vw;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}

.header-nav {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.header-nav > * {
  margin: 0.3em;
}

.header-title {
  font-size: 2.5ch;
}

.header-anchor,
.header-title {
  color: white;
}
</style>
