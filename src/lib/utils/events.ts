import dayjs, { Dayjs } from 'dayjs';
import events from '$lib/data/events.json';

type Event = {
	id: string;
	title: string;
	description: string;
	banner?: string;
	date: Dayjs;
	time?: string;
};

export const getSortedEvents = (): Event[] =>
	events
		.map((event) => ({ ...event, date: dayjs(`${event.date} ${event.time || '12:00'}`) }))
		.sort((a, b) => b.date.valueOf() - a.date.valueOf());

export const getNextEvent = () =>
	getSortedEvents().find((event) => event.date.isAfter(dayjs())) || null;
