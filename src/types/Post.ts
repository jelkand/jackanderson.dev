export type Post = {
	slug: string;
	title: string;
	date: Date;
	description: string;
	category?: string;
	tags?: string[];
};
