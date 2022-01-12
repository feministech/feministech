<template>
  <header>
    <span class="headerTitle"> Feministech </span>

    <nav class="headerNav">
      <a href="#sobre" class="headerAnchor">Sobre a comunidade</a>
      <a href="#partipantes" class="headerAnchor">Quem participa</a>
      <a href="#projetos" class="headerAnchor">Projetos</a>
      <a href="#eventos" class="headerAnchor">Eventos</a>
      <a href="#contatos" class="headerAnchor">Contatos</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
header {
  background-color: #cd3066;
  color: white;
  padding: 1em;
  height: 2em;
  border-style: solid;
  border-color: #cd3066;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
}

.headerTitle {
  font-family: 'Nunito', sans-serif;
  font-size: 2.5ch;
}

.headerNav {
  font-family: 'Open Sans', sans-serif;
  width: 60%;
  display: flex;
  justify-content: space-around;
  font-size: 2ch;
}

.headerAnchor {
  text-decoration: none;
  color: white;
}
</style>
