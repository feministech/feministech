<template>
  <section id="partipantes" class="member-section">
    <h1>Quem participa?</h1>

    <div class="members" v-for="member in members" :key="member">
      <MemberCard
        :memberName="member.name"
        :memberJob="member.job"
        :memberCity="member.city"
        :memberImage="member.image"
        :imageAlt="member.imageAlt"
        :githubLink="member.githubLink"
        :twitchLink="member.twitchLink"
        :devtoLink="member.devtoLink"
        :twitterLink="member.twitterLink"
        :linkedinLink="member.linkedinLink"
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2em 0 0 0;
  gap: 4em 1em;
}
</style>
