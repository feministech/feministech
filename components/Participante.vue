<template>
  <div class="member">
    <div class="memberInfo">
      <div class="name">
        <span class="memberName">
          {{ name }}
        </span>
      </div>
      <div class="job">
        {{ job }}
      </div>
      <div class="city">
        {{ city }}
      </div>
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {
  name: 'ParticipanteComponent',
  props: {
    name: String,
    job: String,
    city: String,
    image: String,
  },
}
</script>

<style>
.member {
  margin: 1.5em;
  width: 30vw;
  height: 20vh;
  border-style: solid;
  border-radius: 25px;
  padding: 1em;
  background-color: #cd3066;
  color: white;
  font-family: 'Open Sans', sans-serif;
}

.memberInfo {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.memberName {
  font-size: 3ch;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
}

.job {
  font-size: 2ch;
  font-weight: 700;
}
</style>
