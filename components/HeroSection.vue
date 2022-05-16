<template>
  <section class="hero">
    <img
      src="images/feministech_logo.webp"
      alt="Logo da Feministech com a letra F estilizada roxa no centro de uma arte de uma filmadora."
      class="logo"
    />
    <h1 class="feministech-title">Feita para todes</h1>

    <p>
      A Feministech é um
      <strong>grupo de pessoas que se identificam no feminino e não-bináries</strong>
      que produzem, consumem e compartilham conteúdo sobre tecnologia, em
      um ambiente diverso e inclusivo.
    </p>

    <div class="hero-social-links">
      <SocialLinks color="pink-background" justify="flex-start" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style>
.hero {
  background-image: url("/images/rainbow-background.svg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}

.logo,
.feministech-title,
p {
  margin: 0.5em 0;
}

.logo {
  width: 15%;
}

.hero > p {
  width: 40%;
}

.hero-social-links {
  margin-top: 2em;
}
</style>
