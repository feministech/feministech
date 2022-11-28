<template>
  <a :href="$attrs.socialLink" id="social-link" class="social-link" target="_blank">
    <font-awesome-icon v-if="$attrs.socialIcon == 'dev'" :icon="faDev"/>
    <font-awesome-icon v-else-if="$attrs.socialIcon == 'github'" :icon="faGithub"/>
    <font-awesome-icon v-else-if="$attrs.socialIcon == 'instagram'" :icon="faInstagram"/>
    <font-awesome-icon v-else-if="$attrs.socialIcon == 'linkedin'" :icon="faLinkedin"/>
    <font-awesome-icon v-else-if="$attrs.socialIcon == 'twitch'" :icon="faTwitch"/>
    <font-awesome-icon v-else-if="$attrs.socialIcon == 'twitter'" :icon="faTwitter"/>
    <font-awesome-icon v-else :icon="faYoutube"/>
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

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin, faDev, faTwitch, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    fas () {
       return fas // NOT RECOMMENDED
    },
    faGithub () {
       return faGithub
    },
    faTwitter () {
       return faTwitter
    },
    faLinkedin () {
       return faLinkedin
    },
    faTwitch () {
       return faTwitch
    },
    faDev () {
       return faDev
    },
    faInstagram () {
       return faInstagram
    },
    faYoutube () {
       return faYoutube
    },
  },
}
</script>