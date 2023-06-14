import people from '$lib/data/people.json';

type Person = {
	name: string;
	pronouns: string;
	socials: {
		[site: string]: string;
	};
	avatar?: string;
};

export const findPerson = (social: string) =>
	(people as Person[]).find((x) => Object.values(x.socials).includes(social));
