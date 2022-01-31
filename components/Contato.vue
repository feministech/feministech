<template>
  <div class="background grey">
    <div class="hero">
      <h1>Entre em contato</h1>
      <p>
        Para entrar em contato com a Feministech, nos envie um email em
        <a href="mailto:oifeministech@gmail.com">oifeministech@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contatoComponent',
}
</script>

<style>
.hero {
  background-color: #7109b6;
  color: white;
  border-radius: 50px;
  padding: 2em;
  margin: 2em;
}

.hero > p {
  width: 100%;
  text-align: justify;
}

.hero > p > strong {
  color: white;
}

.hero > p > a {
  color: #4bc9f1;
  font-weight: 700;
}
</style>
