<script lang="ts">
	import { name } from '$lib/info.js';
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;

	// const modules = import.meta.glob<{
	// 	metadata: Metadata;
	// }>('./*.svx');

	// const sortedPostsPromise = (async () => {
	// 	const posts = await Promise.all(
	// 		Object.entries(modules).map(async ([path, val]) => {
	// 			const {
	// 				metadata: { title, description, date: rawDate, category, tags }
	// 			} = await val();
	// 			const slug = _pathToSlug(path);
	// 			return { slug, title, description, date: new Date(rawDate), category, tags };
	// 		}, [] as Post[])
	// 	);

	// 	return posts.sort((a, b) => compareDesc(a.date, b.date));
	// })();
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div class="flex place-content-center">
	<ul>
		<!-- {#await sortedPostsPromise then sortedPosts} -->
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
		<!-- {/await} -->
	</ul>
</div>
