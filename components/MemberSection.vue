<template>
  <section id="partipantes" class="member-section">
    <h1>Quem participa?</h1>

    <div class="members">
      <div class="member" v-for="member in members" :key="member">
        <MemberCard
          :memberName="member.name"
          :memberJob="member.job"
          :memberCity="member.city"
          :memberCommunityRole="member.communityRole"
          :memberColor="member.color"
          :memberImage="member.image"
          :imageAlt="member.imageAlt"
          :githubLink="member.githubLink"
          :twitchLink="member.twitchLink"
          :devtoLink="member.devtoLink"
          :twitterLink="member.twitterLink"
          :linkedinLink="member.linkedinLink"
        />
      </div>
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
  justify-content: space-between;
}

.member-section {
  padding: 5em 0em;
}
</style>
