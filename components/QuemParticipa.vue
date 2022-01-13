<template>
  <div class="background white">
    <div class="content pink">
      <h1>Quem participa?</h1>

      <div class="members">
        <Participante
          memberName="Amanda"
          memberJob="Desenvolvedora Web"
          memberCity="São Paulo, SP"
          memberImage="mandys.jpg"
        />
        <Participante
          memberName="Amanda"
          memberJob="Desenvolvedora Web"
          memberCity="São Paulo, SP"
          memberImage="mandys.jpg"
        />
        <Participante
          memberName="Amanda"
          memberJob="Desenvolvedora Web"
          memberCity="São Paulo, SP"
          memberImage="mandys.jpg"
        />
        <Participante
          memberName="Amanda"
          memberJob="Desenvolvedora Web"
          memberCity="São Paulo, SP"
          memberImage="mandys.jpg"
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
  height: 100vh;
}
</style>
