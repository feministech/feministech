<template>
  <div class="project-card">
    <div class="project-info">
      <h2 class="project-name">
        {{ projectName }}
      </h2>
      <p class="project-description">
        {{ projectDescription }}
      </p>
    </div>
    <a :href="projectLink" class="project-link" target="_blank" v-if="projectLink">
      <span>Acessar o projeto </span>
      <i class="fas fa-external-link-alt"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    projectName: String,
    projectDescription: String,
    projectLink: String,
  },
}
</script>

<style>
.project-card {
  width: 30vw;
  border-radius: 15px;
  padding: 1em;
  background-color: var(--purple);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1rem;
}

@media screen and (max-width: 500px) {
  .project-card {
    width: 60vw;
  }
}

.project-info {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.project-name,
.project-description {
  width: 100%;
  color: white;
}

.project-link {
  margin-top: 0.5em;
  color: var(--lightBlue);
  border-radius: 10px;
  padding: 0.5em 0.8em;
  background-color: white;
  color: var(--purple);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.project-link:hover {
  cursor: pointer;
  transition: 0.2s;
  background-color: var(--lightBlue);
  color: white;
}
</style>
