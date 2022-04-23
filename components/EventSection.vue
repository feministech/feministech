<template>
  <section id="eventos" class="event-section">
    <h1>Nossos Eventos</h1>
    <div class="events">
      <div class="event" v-for="(event, index) in events" :key="event">
        <EventCard
          :id="index"
          :eventName="event.name"
          :eventDescription="event.description"
          :eventDate="event.date"
          :eventLink="event.link"
          :next="event.next"
        />
      </div>
    </div>
  </section>
</template>

<script>
import eventsJSON from '../data/events.json'

export default {
  name: 'EventSection',
  data() {
    return {
      events: eventsJSON,
    }
  },
}

</script>

<style>
.event-section {
  background-color: whitesmoke;
  align-items: center;
  text-align: center;
}

.events {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media screen and (max-width: 500px) {
  .events {
    flex-direction: column;
  }
}
</style>
