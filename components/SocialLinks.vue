<template>
  <div class="social-links" :style="cssProps">
    <SocialButton
      socialLink="https://twitter.com/feminis_tech/"
      fontAwesome="fab fa-twitter"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.linkedin.com/company/feministech"
      fontAwesome="fab fa-linkedin"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.twitch.tv/team/livecodergirls"
      fontAwesome="fab fa-twitch"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://dev.to/feministech"
      fontAwesome="fab fa-dev"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://github.com/feministech"
      fontAwesome="fab fa-github"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.instagram.com/feminis_tech/"
      fontAwesome="fab fa-instagram"
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
