<template>
  <div class="projeto">
    <div class="projectInfo">
      <div class="projectName">
        <span class="projectName">
          {{ projectName }}
        </span>
      </div>
      <div class="projectDescription">
        {{ projectDescription }}
      </div>
      <a :href="projectLink" class="projectLink">Acesse</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjetoComponent',
  props: {
    projectName: String,
    projectDescription: String,
    projectLink: String,
  },
}
</script>

<style>
.projeto {
  margin: 1em;
  width: 30vw;
  max-width: 35em;
  height: 35vh;
  border-style: solid;
  border-radius: 25px;
  padding: 1.5em;
  background-color: #7109b6;
  color: white;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.projectInfo {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.projectName {
  font-size: 3ch;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
}

.projectDescription {
  font-size: 2ch;
  font-weight: 700;
}

.projectLink {
  margin-top: 0.5em;
  color: #4bc9f1;
  font-size: 2ch;
  font-weight: 700;
}
</style>
