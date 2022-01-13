<template>
  <div class="member">
    <div class="memberInfo">
      <div class="memberName">
        <span class="memberName">
          {{ memberName }}
        </span>
      </div>
      <div class="memberJob">
        {{ memberJob }}
      </div>
      <div class="memberCity">
        {{ memberCity }}
      </div>
    </div>
    <div>
      <img :src="memberImage" alt="" class="memberImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticipanteComponent',
  props: {
    memberName: String,
    memberJob: String,
    memberCity: String,
    memberImage: String,
  },
}
</script>

<style>
.member {
  margin: 1em;
  width: 30vw;
  max-width: 35em;
  height: 20vh;
  border-style: solid;
  border-radius: 25px;
  padding: 1em;
  background-color: #cd3066;
  color: white;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

.memberJob {
  font-size: 2ch;
  font-weight: 700;
}

.memberImage {
  height: 20vh;
  border-style: solid;
  border-radius: 25px;
}
</style>
