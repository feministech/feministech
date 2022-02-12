<template>
  <div class="social-links">
    <SocialButton
      socialLink="https://twitter.com/feminis_tech/"
      fontAwesome="fab fa-twitter"
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
      socialLink="https://www.instagram.com/feminis_cat/"
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
  },
}
</script>
