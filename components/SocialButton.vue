<template>
  <a :href="socialLink" id="social-link" class="social-link" target="_blank">
    <i :class="fontAwesome"></i>
  </a>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    socialLink: String,
    fontAwesome: String,
  },
}
</script>

<style>
.social-link {
  border-radius: 10px;
  padding: 0.5em 0.8em;
  margin :0.1em;
}

.social-link:hover {
  cursor: pointer;
  transition: 0.2s;
}

.purple-social-link {
  background-color: white;
  color: var(--purple);
}

.purple-social-link:hover {
  background-color: var(--lightBlue);
  color: white;
}

.pink-social-link {
  background-color: white;
  color: var(--pink);
}

.pink-social-link:hover {
  background-color: var(--lightBlue);
  color: white;
}

.darkBlue-social-link {
  background-color: white;
  color: var(--darkBlue);
}

.darkBlue-social-link:hover {
  background-color: var(--pink);
  color: white;
}

.pink-background-social-link {
  background-color: var(--pink);
  color: white;
}

.pink-background-social-link:hover {
  background-color: white;
  color: var(--pink);
}
</style>
