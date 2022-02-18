<template>
  <div :class="memberColor + '-member-card member-card'">
    <div>
      <img :src="memberImage" alt="imageAlt" class="member-image" />
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
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="twitchLink"
          :socialLink="twitchLink"
          fontAwesome="fab fa-twitch"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="devtoLink"
          :socialLink="devtoLink"
          fontAwesome="fab fa-dev"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="twitterLink"
          :socialLink="twitterLink"
          fontAwesome="fab fa-twitter"
          :class="memberColor + '-social-link'"
        />
        <SocialButton
          v-if="linkedinLink"
          :socialLink="linkedinLink"
          fontAwesome="fab fa-linkedin-in"
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

@media screen and (min-width:1001px) {
  .member-card {
    width: 40vw;
    max-width: 33em;
    min-height: 16vh;
    border-radius: 15px;
    padding: 1em;
    background-color: var(--pink);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1em 0.5em;
  }

  .member-image {
  width: 20vw;
  border-radius: 15px;
  margin-top: 0.5em;
  margin-right: 1em;
}
}

@media screen and (max-width:1000px) {
  .member-card {
    width: 40vw;
    max-width: 33em;
    min-height: 16vh;
    border-radius: 15px;
    padding: 1em;
    background-color: var(--pink);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0.5em;
  }

   .member-image {
  width: 25vw;
  border-radius: 15px;
  margin-top: 0.5em;
  align-self: center;
}
}

@media screen and (max-width:400px) {
.member-image {
  width: 15vw;
  border-radius: 15px;
  margin-top: 0.5em;
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


.social-link{
  margin-bottom:0.5em;
}
.member-social-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
