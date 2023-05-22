<script lang="ts">
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
	import UnderConstruction from '$lib/layout/UnderConstruction.svelte';

	export let data;
</script>

<Section id="eventos">
	<Title pretitle="Evento">{data.event.title}</Title>
	<pre>{JSON.stringify(data.event, null, 2)}</pre>
</Section>

<style lang="scss">
	pre {
		font-size: 1rem;
	}
</style>
