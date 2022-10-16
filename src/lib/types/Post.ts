export type Post = {
	slug: string;
	title: string;
	date: string;
	description: string;
	category?: string;
	tags?: string[];
	preview?: {
		html?: unknown;
	};
	readingTime?: string;
	headings?: { id: string; depth: number; value?: unknown }[];
};
