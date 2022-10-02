import { compareDesc } from 'date-fns';
import { _pathToSlug, type Metadata } from 'src/routes/blog/_importer';
import type { Post } from 'src/types/Post';

export async function getPosts() {
	const modules = import.meta.glob<{
		metadata: Metadata;
	}>('../**/*.svx');

	const sortedPostsPromise = (async () => {
		const posts = await Promise.all(
			Object.entries(modules).map(async ([path, val]) => {
				const {
					metadata: { title, description, date: rawDate, category, tags }
				} = await val();
				const slug = _pathToSlug(path).replace('routes/', '');
				return { slug, title, description, date: new Date(rawDate), category, tags };
			}, [] as Post[])
		);

		return posts.sort((a, b) => compareDesc(a.date, b.date));
	})();

	return await sortedPostsPromise;
}
