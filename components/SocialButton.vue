<template>
  <a :href="socialLink" id="social-link" class="social-link" target="_blank">
  <client-only>
    <font-awesome-icon :icon="['fab', socialIcon]" class="brandIcon" />
  </client-only>
  </a>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    socialLink: String,
    socialIcon: String,
  },
}
</script>

<style>
.social-link {
  border-radius: 10px;
  padding: 0.5em 0.8em;
  margin: 0.1em;
  transition-duration: 0.2s;
}

.social-link:hover {
  cursor: pointer;
  transition-duration: 0.2s;
}

.brandIcon {
  transition-duration: 0.2s;
}

.purple-social-link, .purple-social-link > .brandIcon {
  background-color: white;
  color: var(--purple);
}

.purple-social-link:hover, .purple-social-link:hover > .brandIcon {
  background-color: var(--lightBlue);
  color: white;
}

.pink-social-link, .pink-social-link > .brandIcon {
  background-color: white;
  color: var(--pink);
}

.pink-social-link:hover, .pink-social-link:hover > .brandIcon {
  background-color: var(--lightBlue);
  color: white;
}

.darkBlue-social-link, .darkBlue-social-link > .brandIcon {
  background-color: white;
  color: var(--darkBlue);
}

.darkBlue-inverse-social-link, .darkBlue-inverse-social-link > .brandIcon {
  background-color: var(--darkBlue);
  color: white;
}

.darkBlue-inverse-social-link:hover, .darkBlue-inverse-social-link:hover > .brandIcon {
  background-color: white;
  color: var(--darkBlue);
}

.darkBlue-social-link:hover, .darkBlue-social-link:hover > .brandIcon {
  background-color: var(--pink);
  color: white;
}

.pink-background-social-link, .pink-background-social-link > .brandIcon {
  background-color: var(--pink);
  color: white;
}

.pink-background-social-link:hover, .pink-background-social-link:hover > .brandIcon {
  background-color: white;
  color: var(--pink);
}
</style>
