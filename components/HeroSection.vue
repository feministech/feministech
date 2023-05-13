<template>
  <section class="hero">
    <img
      src="/images/feministech_logo.webp"
      alt="Logo da Feministech com a letra F estilizada roxa no centro de uma arte de uma filmadora."
      class="logo"
    />
    <h1 class="feministech-title">Feita para todes</h1>

    <p>
      A Feministech é uma <strong>comunidade feminista de pessoas trans, não-binárias
      e mulheres cis</strong> que produzem, consomem e compartilham conteúdo sobre
      tecnologia, enquanto constroem uma comunidade diversa e inclusiva.
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
