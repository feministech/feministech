<script lang="ts">
	import 'dayjs/locale/pt-br';
	import dayjs from 'dayjs';
	import { Twitch } from 'lucide-svelte';
	import Button from '$lib/elements/Button.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
	import Subtitle from '$lib/elements/Subtitle.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import Timetable from '$lib/components/Timetable.svelte';

	export let data;

	const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	const schedule =
		data.event.schedule?.map((event) => ({
			title: event.title,
			hosts: event.hosts,
			datetime: dayjs(`${event.date || data.event.date} ${event.time}`)
		})) || [];

	const tabs = schedule
		.filter(
			(event, idx, arr) =>
				arr.findIndex((newArr) => newArr.datetime.isSame(event.datetime, 'day')) === idx
		)
		.map((event) => ({
			id: event.datetime.toISOString(),
			label: `${capitalizeFirstLetter(
				event.datetime.locale('pt-br').format('dddd').split('-')[0]
			)} ${event.datetime.format('(DD/MM)')}`
		}));

	let activeTab = tabs[0].id; // iso date

	$: activeSchedule = schedule.filter((event) => event.datetime.isSame(dayjs(activeTab), 'day'));
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
	<Tabs {tabs} bind:activeTab />

	<Timetable schedule={activeSchedule} />
</Section>

<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 8rem;
	}
</style>
