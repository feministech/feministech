<template>
  <div class="talk">
    <div class="talk-info">
      <h1 class="talk-title" v-if="talkTitle">{{ talkTitle }}</h1>
      <h3 class="talk-time" v-if="talkTime">{{ talkTime }}</h3>
      <h3>
        <a :href="talkLink" v-if="talkLink">Vídeo</a>
      </h3>
      <div class="hosts" v-if="talkHosts">
        <div class="host" v-for="host in talkHosts" :key="host">
          <h2 class="talk-host">{{ host.name }}</h2>
          <div class="host-social-links">
            <SocialButton
              v-if="host.github"
              :socialLink="host.github"
              fontAwesome="fab fa-github"
              class="social-link darkBlue-inverse-social-link"
            />
            <SocialButton
              v-if="host.twitch"
              :socialLink="host.twitch"
              fontAwesome="fab fa-twitch"
              class="social-link darkBlue-inverse-social-link"
            />
            <SocialButton
              v-if="host.devto"
              :socialLink="host.devto"
              fontAwesome="fab fa-dev"
              class="social-link darkBlue-inverse-social-link"
            />
            <SocialButton
              v-if="host.twitter"
              :socialLink="host.twitter"
              fontAwesome="fab fa-twitter"
              class="social-link darkBlue-inverse-social-link"
            />
            <SocialButton
              v-if="host.linkedin"
              :socialLink="host.linkedin"
              fontAwesome="fab fa-linkedin-in"
              class="social-link darkBlue-inverse-social-link"
            />
            <SocialButton
              v-if="host.instagram"
              :socialLink="host.instagram"
              fontAwesome="fab fa-instagram"
              class="social-link darkBlue-inverse-social-link"
            />
          </div>
          <div></div>
        </div>
      </div>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkCard",
  props: {
    talkTitle: String,
    talkTime: String,
    talkLink: String,
    talkHosts: Array,
  },
}
</script>

<style>
.talk {
  margin-top: 1em;
  padding: 0.5em;
  border-radius: 10px;
  width: 75%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media screen and (max-width: 500px) {
  .talk {
    width: 100%;
  }
}

.talk-title,
.talk-host,
.talk-time {
  color: black;
  text-align: justify;
}

.host {
  margin-top: 1em;
  margin-bottom: 2em;
}

.host-social-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.talk-title {
  font-size: 4.5ch;
}

.line {
  display: block;
  background-color: var(--darkBlue);
  width: 100%;
  height: 7px;
}
</style>
