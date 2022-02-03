<template>
  <section id="eventos" class="event-section">
    <h1>Nossos Eventos</h1>
    <p>
      Nossos eventos são sempre mensais,
      <a 
        href="https://twitter.com/feminis_tech/"  target="_blank">
        veja o nosso Twitter
        <i class="fas fa-external-link-alt"></i>
      </a>
      para acompanhar nossos próximos eventos!
    </p>
  </section>
</template>

<script>
export default {
  name: 'EventSection',
}
</script>

<style>
.event-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>