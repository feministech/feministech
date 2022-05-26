<template>
  <section id="eventos" class="event-section">
    <h1>Nossos Eventos</h1>
    <div class="events">
      <div class="event" v-for="event in events" :key="event">
        <EventCard
          :id="event.id"
          :eventName="event.name"
          :eventDescription="event.description"
          :eventDate="event.date"
          :eventLink="event.link"
          :next="event.next"
        />
      </div>
    </div>
    <button v-if="events.length != eventsBrute.length" @click="showMoreEvents" class="moreEvents">
      <i class="fa-solid fa-spinner"></i>
    </button>
  </section>
</template>

<script>
import eventsJSON from '../data/events.json'

export default {
  name: 'EventSection',
  data() {
    return {
      eventsBrute: eventsJSON,
      events: eventsJSON.slice(0, 4),
      eventPage: 1,
    }
  },
  methods: {
    showMoreEvents() {
      this.eventPage++
      this.events = this.eventsBrute.slice(0, 4 * this.eventPage)
    }
  }
}

</script>

<style>
.event-section {
  background-color: whitesmoke;
  align-items: center;
  text-align: center;
}

.events {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.moreEvents {
  background-color: var(--pink);
  font-size: 3ch;
  border-radius: 10px;
  width: 8em;
  height: 4em;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .events {
    flex-direction: column;
  }
}
</style>
