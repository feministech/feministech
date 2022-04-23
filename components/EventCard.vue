<template>
  <div class="event-card">
    <h2 class="event-name">{{ eventName }}</h2>
    <p class="event-description">{{ eventDescription }}</p>
    <span>
      <NuxtLink class="event-link" :to="{ path: '/evento?evento=' + id }">Link do evento</NuxtLink>
    </span>
    <p class="event-date">{{ eventDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    id: Number,
    eventName: String,
    eventDescription: String,
    eventDate: String,
    eventLink: String,
    next: Boolean,
  },
}
</script>

<style>
.event-card {
  width: 30em;
  min-height: 23vh;
  border-radius: 15px;
  padding: 1em;
  background-color: var(--pink);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em 0.5em;
}

@media screen and (max-width: 2200px) {
  .event-card {
    width: 40vw;
  }
}

@media screen and (max-width: 1000px) {
  .event-card {
    width: 40vw;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 500px) {
  .event-card {
    width: 60vw;
    flex-direction: column;
    align-items: center;
  }
}

.event-name,
.event-date {
  color: black;
}

.event-name {
  border-radius: 6px;
}

.event-description {
  text-align: justify;
}

.event-link {
  color: white;
  font-size: 3ch;
}

.event-social-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
