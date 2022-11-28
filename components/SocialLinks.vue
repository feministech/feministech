<template>
  <div class="social-links" :style="cssProps">
    <SocialButton
      socialLink="https://twitter.com/feminis_tech/"
      socialIcon="twitter"
      aria-label="Link para a twitter"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.linkedin.com/company/feministech"
      socialIcon="linkedin"
      aria-label="Link para o linkedin"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.twitch.tv/team/livecodergirls"
      socialIcon="twitch"
      aria-label="Link para a twitch"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://dev.to/feministech"
      socialIcon="dev"
      aria-label="Link para o dev.to"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://github.com/feministech"
      socialIcon="github"
      aria-label="Link para o repositório do github"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.instagram.com/feminis_tech/"
      socialIcon="instagram"
      aria-label="Link para o instagram"
      :class="color + '-social-link'"
    />
    <SocialButton
      socialLink="https://www.youtube.com/c/feministech/"
      socialIcon="youtube"
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
