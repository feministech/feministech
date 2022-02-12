<template>
  <div class="member-card">
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
      <div class="member-social-links">
        <SocialButton
          :socialLink="githubLink"
          fontAwesome="fab fa-github"
          class="pink-social-link"
        />
        <SocialButton
          :socialLink="twitchLink"
          fontAwesome="fab fa-twitch"
          class="pink-social-link"
        />
        <SocialButton
          :socialLink="devtoLink"
          fontAwesome="fab fa-dev"
          class="pink-social-link"
        />
        <SocialButton
          :socialLink="twitterLink"
          fontAwesome="fab fa-twitter"
          class="pink-social-link"
        />
        <SocialButton
          :socialLink="linkedinLink"
          fontAwesome="fab fa-linkedin-in"
          class="pink-social-link"
        />
      </div>
    </div>
    <div>
      <img :src="memberImage" alt="imageAlt" class="member-image" />
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
  width: 30vw;
  max-width: 35em;
  height: 22vh;
  border-radius: 15px;
  padding: 1em;
  background-color: var(--pink);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.member-info {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.member-name,
.member-job,
.member-city {
  color: white;
}

.member-image {
  height: 100%;
  border-radius: 15px;
}

.member-social-links {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
