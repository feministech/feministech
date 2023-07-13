import events from '$lib/data/events.json';
import { error } from '@sveltejs/kit';

type Event = {
	id: string;
	title: string;
	description: string;
	banner: string;
	date: string;
	time?: string;
	url: string;
	schedule?: {
		title: string;
		date?: string;
		time: string;
		hosts: string[];
	}[];
};

export const load = async ({ params }) => {
	const event = events.find((event) => event.id === params.id) as Event;
	if (!event) throw error(404);
	return { event };
};
