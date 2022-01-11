<template>
  <div class="feministech">
    <img src="feminis_logo.png" alt="Feministech Logo" class="feminisLogo">
    <span class="feministechTitle">
      Feita para todes
    </span>

    <p>
      Somos um grupo de pessoas que se identificam no feminino e não binárias e que compartilham o interesse por lives na Twitch.
    </p>

  </div>
</template>

<script>
export default {
  name: 'FeministechComponent',
}
</script>

<style>
.feministech{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45vh;
  margin-left: 10vw;
  margin-top: 5vh;
}

.feminisLogo{
  width: 15%;
}

.feministechTitle{
  font-family: 'Nunito', sans-serif;
  font-size: 6ch;
  font-weight: 700;
  color: #C9086D;
}

p{
  font-family: "Open Sans", sans-serif;
  width: 50%;
  font-size: 2ch;
}
</style>
