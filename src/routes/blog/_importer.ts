import type { Post } from 'src/types/Post';

export type Metadata = {
	title: string;
	date: string;
	description: string;
	category?: string;
	tags?: string[];
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const _pathToSlug = (path: string) => path.match(/\.\/(.*)\.svx/)![1]!;

export const allPosts: Post[] = await (async () => {
	const modules = import.meta.glob<{
		metadata: Metadata;
	}>('./*.svx');
	return Promise.all(
		Object.entries(modules).map(async ([path, val]) => {
			const {
				metadata: { title, description, date: rawDate, category, tags }
			} = await val();
			const slug = _pathToSlug(path);
			return { slug, title, description, date: new Date(rawDate), category, tags };
		}, [] as Post[])
	);
})();
