<template>
  <section id="projetos" class="project-section">
    <h1>Projetos</h1>

    <div class="projects">
      <ProjectCard v-for="project in projects" :key="project"
       :projectName="project.name"
       :projectDescription="project.description"
       :projectLink="project.link"
      />
    </div>
  </section>
</template>

<script>
import projectsJSON from '../data/projects.json'
export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: projectsJSON,
    }
  },
}
</script>

<style>
.project-section {
  background-color: white;
}

.project-section > h1 {
  text-align: center;
}

.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2em 0 0 0;
}
</style>
