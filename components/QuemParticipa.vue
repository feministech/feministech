<template>
  <div class="background white">
    <div class="content pink">
      <h1>Quem participa?</h1>

      <div class="members">
        <Participante
          memberName="Levxyca"
          memberJob="Estudante e Streamer"
          memberCity="Paraná, BR"
          memberImage="images/levxyca.webp"
        />
        <Participante
          memberName="Morganna Giovanelli"
          memberJob="Desenvolvedora Backend"
          memberCity="São Paulo, BR"
          memberImage="images/morganna.webp"
        />
        <Participante
          memberName="Pachi Codes"
          memberJob="DevRel"
          memberCity="São Paulo, BR"
          memberImage="images/pachicodes.webp"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quemParticipa',
}
</script>

<style>
.members {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  height: 70vh;
}
</style>
