<template>
  <div :class="memberColor + '-member-card member-card'">
    <div>
      <img :src="memberImage" aria-hidden="true" class="member-image" />
    </div>
    <div class="member-info">
      <h2 class="member-name">
        {{ memberName }}
      </h2>
      <h3 class="member-job">
        {{ memberJob }}
      </h3>
      <p class="member-city">
        {{ memberCity }}
      </p>
      <p class="member-community-role">
        {{ memberCommunityRole }}
      </p>
      <div class="member-social-links">
        <SocialButton
          v-if="githubLink"
          :socialLink="githubLink"
          fontAwesome="fab fa-github"
          aria-label="Link para o github"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="twitchLink"
          :socialLink="twitchLink"
          fontAwesome="fab fa-twitch"
          aria-label="Link para a twitch"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="devtoLink"
          :socialLink="devtoLink"
          fontAwesome="fab fa-dev"
          aria-label="Link para o dev.to"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="twitterLink"
          :socialLink="twitterLink"
          fontAwesome="fab fa-twitter"
          aria-label="Link para o twitter"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="linkedinLink"
          :socialLink="linkedinLink"
          fontAwesome="fab fa-linkedin-in"
          aria-label="Link para o linkedin"
          :class="memberColor + '-social-link'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCard',
  props: {
    memberName: String,
    memberJob: String,
    memberCity: String,
    memberCommunityRole: String,
    memberColor: String,
    memberImage: String,
    imageAlt: String,
    githubLink: String,
    twitchLink: String,
    devtoLink: String,
    twitterLink: String,
    linkedinLink: String,
  },
}
</script>

<style>
.member-card {
  max-width: 33em;
  min-height: 16vh;
  border-radius: 15px;
  padding: 1em;
  background-color: var(--pink);
  display: flex;
  justify-content: space-between;
  margin: 1em 0.5em;
}

.member-image {
  border-radius: 15px;
  margin-top: 0.5em;
  align-self: center;
}

@media screen and (min-width: 2200px) {
  .member-card {
    width: 40vw;
    flex-direction: row;
  }

  .member-image {
    width: 10vw;
    margin-right: 1em;
  }
}

@media screen and (max-width: 2200px) {
  .member-card {
    width: 40vw;
    flex-direction: row;
  }

  .member-image {
    width: 15vw;
    margin-right: 1em;
  }
}

@media screen and (max-width: 1000px) {
  .member-card {
    width: 40vw;
    flex-direction: column;
    align-items: center;
  }

  .member-image {
    width: 25vw;
    align-self: center;
  }
}

@media screen and (max-width: 500px) {
  .member-card {
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
  .member-image {
    width: 35vw;
  }
}

.pink-member-card {
  background: var(--pink);
}

.purple-member-card {
  background: var(--purple);
}

.darkBlue-member-card {
  background: var(--darkBlue);
}

.member-info {
  height: 100%;
  width: 100%;
  min-height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  word-wrap: break-word;
}

.member-name,
.member-job,
.member-city,
.member-community-role {
  color: white;
}

.member-social-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
