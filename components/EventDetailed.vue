<template>
  <div class="event-detailed">
    <div class="event-detailed-info">
      <h1 class="event-detailed-name">{{ event.name }}</h1>
      <h2 class="event-detailed-description">{{ event.description }}</h2>
      <h3 class="event-detailed-date">{{ event.date }}</h3>

      <span>
        <a :href="event.link" v-if="event.link" class="event-detailed-link">Acessar evento</a>
      </span>
    </div>

    <div class="talks" v-if="event.talks">
      <div v-for="talk in event.talks" :key="talk">
        <Talk
          :talkTitle="talk.title"
          :talkTime="talk.time"
          :talkLink="talk.link"
          :talkHosts="talk.hosts"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eventDetailed",
  props: {
    event: Object,
  },
}
</script>

<style>
.event-detailed {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
}

@media screen and (max-width: 500px) {
  .event-detailed {
    width: 90%;
  }
}

.event-detailed-info {
  background-color: var(--lightBlue);
  padding: 0.4em;
  border-radius: 10px;
}

.event-detailed-name,
.event-detailed-description,
.event-detailed-date {
  color: black;
}

.event-detailed-name {
  font-size: 5ch;
  background-color: var(--lightBlue);
}

.event-detailed-description {
  color: black;
}

.event-detailed-link {
  font-size: 2.5ch;
  color: var(--darkBlue);
}

.talks {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
