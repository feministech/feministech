<template>
  <div class="background grey">
    <div class="hero">
      <h1>Entre em contato</h1>
      <p>
        Ipsum lorem durun sirun virum durum mussum kirum abum
        <strong>kabum tcha tacha tacha</strong> zip zop zup
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
</style>
