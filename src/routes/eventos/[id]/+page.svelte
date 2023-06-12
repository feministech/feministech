<script lang="ts">
	import { Twitch } from 'lucide-svelte';
	import Button from '$lib/elements/Button.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
	import Subtitle from '$lib/elements/Subtitle.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import Timetable from '$lib/components/Timetable.svelte';

	export let data;

	let activeTab = 'qua';
</script>

<Section id="eventos">
	<header class="header">
		<Title pretitle="Evento" subtitle={data.event.description}>
			{data.event.title}
		</Title>
		<Button>
			<Twitch size={20} />
			Assistir gravação
		</Button>
	</header>

	<Subtitle borderless>Programação</Subtitle>
	<Tabs bind:activeTab />

	<Timetable />
</Section>

<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2.25rem;
	}
</style>
