<template>
  <section id="contatos" class="contact-section">
    <h1>Entre em contato</h1>
    <p>
      Para entrar em contato com a Feministech, nos envie um email em
      <a 
        href="mailto:contato@feminis.tech" class="email-link"
        >
        contato@feminis.tech
      </a>
    </p>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<style>
.contact-section {
  background-color: var(--pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-section > h1, 
.contact-section > p, 
.email-link {
  color: white;
}

</style>
