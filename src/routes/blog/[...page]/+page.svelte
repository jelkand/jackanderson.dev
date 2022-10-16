<script lang="ts">
	import { name } from '$lib/info.js';
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div class="flex flex-col flex-grow">
	<div class="flex-grow divide-y divide-slate-300 dark:divide-slate-700">
		{#each data.posts as post}
			<div class="py-8 first:pt-0">
				<PostCard {post} />
				<!-- <PostPreview {post} /> -->
			</div>
		{/each}
	</div>

	<!-- pagination -->
	<div class="flex visible items-center justify-between pt-8 opacity-70">
		{#if !isFirstPage}
			<p>previous</p>
			<!-- <ButtonLink raised={false} href={`/posts/page/${data.page - 1}`}>
				<slot slot="icon-start">
					<ArrowLeftIcon class="h-5 w-5" />
				</slot>
				Previous
				<slot slot="icon-end" /></ButtonLink -->
			>
		{:else}
			<div />
		{/if}

		{#if hasNextPage}
			<p>Next</p>
			<!-- <ButtonLink raised={false} href={`/posts/page/${data.page + 1}`}>Next</ButtonLink> -->
		{/if}
	</div>
</div>

<!-- <div class="flex place-content-center">
	<ul>
		{#await sortedPostsPromise then sortedPosts} -->
<!-- {#each data.posts as post}
			<PostCard {post} />
		{/each} -->
<!-- {/await} -->
<!-- </ul> -->
<!-- </div> -->
