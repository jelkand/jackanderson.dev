export type Metadata = {
	title: string;
	date: string;
	description: string;
	category?: string;
	tags?: string[];
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const _pathToSlug = (path: string) => path.match(/\.\/(.*)\.svx/)![1]!;
