<template>
  <header>
    <span class="headerTitle">
      Feministech
    </span>

    <nav>
    <a href="#sobre">Sobre a comunidade</a>
    <a href="#partipantes">Quem participa</a>
    <a href="#projetos">Projetos</a>
    <a href="#eventos">Eventos</a>
    <a href="#contatos">Contatos</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
  header{
    background-color: #CD3066;
    color: white;
    padding: 1em;
    height: 2em;
    border-style: solid;
    border-color: #CD3066;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: space-around;
    font-weight: 700;
  }

  .headerTitle{
    font-family: "Nunito", sans-serif;
    font-size: 2.5ch;
  }

  nav{
    font-family: "Open Sans", sans-serif;
    width: 60%;
    display: flex;
    justify-content: space-around;
    font-size: 2ch;
  }

  a{
    text-decoration: none;
    color: white;
  }
</style>
