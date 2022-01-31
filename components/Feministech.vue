<template>
  <div class="feministech">
    <div class="feministechContent">
      <img src="feminis_logo.png" alt="Feministech Logo" class="feminisLogo" />
      <span class="feministechTitle"> Feita para todes </span>

      <p>
        Somos um grupo de pessoas que se identificam no feminino e não bináries
        e que compartilham o interesse por tecnologia.
      </p>
    </div>
    <div class="feministechRainbow">
      <img src="arco-iris.png" alt="Arco Íris" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeministechComponent',
}
</script>

<style>
.feministech {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -4vh;
}

.feministechContent {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45vh;
  margin-left: 10vw;
  margin-top: 10vh;
}

.feministechRainbow {
  width: 40vw;
  z-index: -1;
}

.feminisLogo {
  width: 15%;
}

.feministechTitle {
  font-family: 'Nunito', sans-serif;
  font-size: 7ch;
  font-weight: 700;
  color: #c9086d;
}

p {
  font-family: 'Open Sans', sans-serif;
  width: 50%;
  font-size: 2.5ch;
}
</style>
