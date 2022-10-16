import { posts } from '$lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	posts: posts.slice(0, 3)
});
