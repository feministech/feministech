import events from '$lib/data/events.json';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const event = events.find((event) => event.id === params.id);
	if (!event) throw error(404);
	return { event };
};
