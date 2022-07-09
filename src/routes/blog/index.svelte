<script lang="ts">
	import { compareDesc } from 'date-fns';
	import PostCard from 'src/components/PostCard.svelte';
	import type { Post } from 'src/types/Post';
	import { _pathToSlug, type Metadata } from './_importer';

	const modules = import.meta.glob<{
		metadata: Metadata;
	}>('./*.svx');

	const sortedPostsPromise = (async () => {
		const posts = await Promise.all(
			Object.entries(modules).map(async ([path, val]) => {
				const {
					metadata: { title, description, date: rawDate, category, tags }
				} = await val();
				const slug = _pathToSlug(path);
				return { slug, title, description, date: new Date(rawDate), category, tags };
			}, [] as Post[])
		);

		return posts.sort((a, b) => compareDesc(a.date, b.date));
	})();
</script>

<div class="flex place-content-center">
	<ul>
		{#await sortedPostsPromise then sortedPosts}
			{#each sortedPosts as post}
				<PostCard {post} />
			{/each}
		{/await}
	</ul>
</div>
