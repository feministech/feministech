<template>
  <section id="partipantes" class="member-section">
    <h1>Quem participa?</h1>

    <div class="members">
      <MemberCard
        memberName="Levxyca"
        memberJob="Estudante e Streamer"
        memberCity="Paraná, BR"
        memberImage="images/members/levxyca.webp"
        imageAlt="Leticia sorrindo de cabelos cacheados azuis, delineado e batom nude escuro."
        githubLink="https://github.com/levxyca"
        twitchLink="https://twitch.tv/levxyca"
        devtoLink="https://dev.to/levxyca"
        twitterLink="https://twitter.com/levxyca"
        linkedinLink="https://linkedin.com/in/leticiacaroline"
      />
      <MemberCard
        memberName="Morganna Giovanelli"
        memberJob="Desenvolvedora Back-End"
        memberCity="São Paulo, BR"
        memberImage="images/members/morganna.webp"
        imageAlt="Morganna sorrindo com cabelos cacheados e castanhos com mechas azuis, vestindo um macacão jeans e camiseta preta."
        githubLink="https://github.com/morgannadev"
        twitchLink="https://twitch.tv/morgannadev"
        devtoLink="https://dev.to/morgannadev"
        twitterLink="https://twitter.com/morgannadev"
        linkedinLink="https://linkedin.com/in/morgannadev"
      />
      <MemberCard
        memberName="Pachi Codes"
        memberJob="DevRel"
        memberCity="São Paulo, BR"
        memberImage="images/members/pachicodes.webp"
        imageAlt="Pachi sorrindo de óculos com cabelos lisos pretos com mechas amarelas e blusa de moletom branca."
        githubLink="https://github.com/pachicodes"
        twitchLink="https://twitch.tv/pachicodes"
        devtoLink="https://dev.to/pachicodes"
        twitterLink="https://twitter.com/pachicodes"
        linkedinLink="https://linkedin.com/in/pachicodes"
      />
      <MemberCard
        memberName="Amanda Martins"
        memberJob="Desenvolvedora Fullstack"
        memberCity="São Paulo, BR"
        memberImage="images/members/mandys.webp"
        imageAlt="Amanda sorrindo com cabelos cacheados roxos e camiseta branca."
        githubLink="https://github.com/mandysdev"
        twitchLink="https://twitch.tv/mandysdev"
        devtoLink="https://dev.to/mandysdev"
        twitterLink="https://twitter.com/mandysdev"
        linkedinLink="https://linkedin.com/in/mandysdev"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MemberSection',
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
