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
      event: eventsJSON[this.$route.query.evento] || eventsJSON[eventsJSON.length - 1],
    }
  },
}
</script>

<style>
@import "./root.css";
</style>
