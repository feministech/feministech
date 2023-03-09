<template>
  <a :href="socialLink" id="social-link" class="social-link" target="_blank">
    <font-awesome-icon v-if="socialIcon == 'dev'" icon="fa-brands fa-dev"/>
    <font-awesome-icon v-else-if="socialIcon == 'github'" icon="fa-brands fa-github"/>
    <font-awesome-icon v-else-if="socialIcon == 'instagram'" icon="fa-brands fa-instagram"/>
    <font-awesome-icon v-else-if="socialIcon == 'linkedin'" icon="fa-brands fa-linkedin"/>
    <font-awesome-icon v-else-if="socialIcon == 'twitch'" icon="fa-brands fa-twitch"/>
    <font-awesome-icon v-else-if="socialIcon == 'twitter'" icon="fa-brands fa-twitter"/>
    <font-awesome-icon v-else icon="fa-brands fa-youtube"/>
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

.darkBlue-inverse-social-link {
  background-color: var(--darkBlue);
  color: white;
}

.darkBlue-inverse-social-link:hover {
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
