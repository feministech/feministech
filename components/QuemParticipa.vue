<template>
  <div class="background white">
    <div class="content pink">
      <h1>Quem participa?</h1>

      <div class="members">
        <Participante
          name="Amanda"
          job="Desenvolvedora Web"
          city="São Paulo, SP"
        />
        <Participante
          name="Amanda"
          job="Desenvolvedora Web"
          city="São Paulo, SP"
        />
        <Participante
          name="Amanda"
          job="Desenvolvedora Web"
          city="São Paulo, SP"
        />
        <Participante
          name="Amanda"
          job="Desenvolvedora Web"
          city="São Paulo, SP"
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
  justify-content: space-around;
  height: 120vh;
}
</style>
