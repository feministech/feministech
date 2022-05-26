<template>
  <div class="app">
    <EventDetailed :event="event" />
  </div>
</template>

<script>
import eventsJSON from '../data/events.json'

export default {
  name: 'EventPage',
  data() {
    return {
      event: eventsJSON.filter((event) => {
        return event.id === Number(this.$route.query.evento)
      })[0] || eventsJSON[eventsJSON.length - 1],
    }
  },
}
</script>

<style>
@import "./root.css";
</style>
