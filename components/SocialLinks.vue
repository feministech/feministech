<template>
  <div class="social-links" :style="cssProps">
    <SocialButton
      socialLink="https://twitter.com/feminis_tech/"
      fontAwesome="fab fa-twitter"
      aria-label="Link para a twitter"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.linkedin.com/company/feministech"
      fontAwesome="fab fa-linkedin"
      aria-label="Link para o linkedin"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.twitch.tv/team/livecodergirls"
      fontAwesome="fab fa-twitch"
      aria-label="Link para a twitch"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://dev.to/feministech"
      fontAwesome="fab fa-dev"
      aria-label="Link para o dev.to"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://github.com/feministech"
      fontAwesome="fab fa-github"
      aria-label="Link para o repositório do github"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.instagram.com/feminis_tech/"
      fontAwesome="fab fa-instagram"
      aria-label="Link para o instagram"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.youtube.com/c/feministech/"
      fontAwesome="fab fa-youtube"
      aria-label="Link para o youtube"
      :class="color + '-social-link'"
    />
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    color: String,
    justify: String,
  },
  computed: {
    cssProps() {
      return {
        '--justify': this.justify,
      }
    },
  },
}
</script>

<style>
.social-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: var(--justify);
}
</style>
