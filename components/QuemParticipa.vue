<template>
  <div class="background white">
    <div class="content pink">
      <h1>Quem participa?</h1>

      <div class="members">
        <Participante
          memberName="Levxyca"
          memberJob="Estudante e Streamer"
          memberCity="Paraná, BR"
          memberImage="levxyca.jpg"
        />
        <Participante
          memberName="Morganna Giovanelli"
          memberJob="Desenvolvedora Backend"
          memberCity="São Paulo, BR"
          memberImage="morganna.jpg"
        />
        <Participante
          memberName="Pachi Codes"
          memberJob="DevRel"
          memberCity="São Paulo, BR"
          memberImage="pachicodes.jpg"
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
