import people from '$lib/data/people.json';

type Person = {
	name: string;
	pronoun?: string;
	socials: {
		[site: string]: string;
	};
	avatar: string;
};

export const findPerson = (social: string) => {
	const person = (people as Person[]).find((x) => Object.values(x.socials).includes(social));
	if (!person) return null;
	return {
		...person,
		avatar: person?.avatar
			? person?.avatar
			: person.socials?.github
			? `https://github.com/${person.socials.github}.png`
			: `https://unavatar.io/${social}`
	};
};
