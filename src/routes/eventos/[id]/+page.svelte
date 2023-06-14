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
	import NaoSeiSeComentoImg from '../../../assets/img/nao-sei-se-comento.webp';

	export let data;

	const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	const schedule =
		data.event.schedule?.map((event) => ({
			title: event.title,
			hosts: event.hosts,
			datetime: dayjs(`${event?.date || data.event.date} ${event.time}`)
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

	const hasMultipleDays = tabs.length > 1;

	let activeTab = hasMultipleDays ? tabs[0].id : null; // iso date

	$: activeSchedule = hasMultipleDays
		? schedule.filter((event) => event.datetime.isSame(dayjs(activeTab), 'day'))
		: schedule;
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

	{#if schedule.length}
		<Subtitle borderless={!!hasMultipleDays}>Programação</Subtitle>
		{#if hasMultipleDays && activeTab}
			<Tabs {tabs} bind:activeTab />
		{/if}
		<Timetable schedule={activeSchedule} />
	{:else}
		<p class="empty">
			<img src={NaoSeiSeComentoImg} alt="" />
			<span>Ainda não temos informações sobre esse evento... 👀</span>
		</p>{/if}
</Section>

<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 8rem;
	}

	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;

		img {
			height: 8rem;
		}
	}
</style>
