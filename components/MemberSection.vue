<template>
  <section id="partipantes" class="member-section">
    <h1>Quem participa?</h1>

    <div class="members">
        <MemberCard
v-for="member in members" :key="member.name"
          :member-name="member.name"
          :member-job="member.job"
          :member-city="member.city"
          :member-community-role="member.communityRole"
          :member-color="member.color"
          :member-image="member.image"
          :image-alt="member.imageAlt"
          :github-link="member.githubLink"
          :twitch-link="member.twitchLink"
          :devto-link="member.devtoLink"
          :twitter-link="member.twitterLink"
          :linkedin-link="member.linkedinLink"
        />
    </div>
  </section>
</template>

<script>
import membersJSON from '../data/members.json'
export default {
  name: 'MemberSection',
  data() {
    return {
      members: membersJSON,
    }
  },
}
</script>

<style>
.member-section > h1 {
  text-align: center;
}

.members {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.member-section {
  padding: 5em 0em;
}
</style>
