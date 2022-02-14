<template>
  <div class="app">
    <Header />
    <HeroSection />
    <AboutSection />
    <MemberSection />
    <ProjectSection />
    <EventSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
/* Color palettes */

:root {
  --pink: #cd3066;
  --purple: #7109b6;
  --lightBlue: #4bc9f1;
  --darkBlue: #3a0ca3;
}

/* General styles */

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  font-family: 'Open Sans', sans-serif;
  font-size: 100%;
}

section {
  padding: 5em 15em;
}

/* Default font styles */

h1,
h2,
h3 {
  font-family: 'Nunito', sans-serif;
  color: var(--pink);
}

h1 {
  font-size: 4ch;
}

h2 {
  font-size: 3ch;
}

h3 {
  font-size: 2.5ch;
}

p,
a,
strong {
  font-size: 2ch;
}

h1,
h2,
h3,
strong,
a {
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  transition: 0.2s;
  text-decoration: underline;
}

p {
  font-weight: 400;
  width: 100%;
}
</style>
