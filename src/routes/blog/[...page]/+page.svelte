<script lang="ts">
	import { name } from '$lib/info.js';
	import PostsList from '$lib/components/PostsList.svelte';
	import type { PageData } from './$types';
	import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte';

	import { RssIcon } from 'svelte-feather-icons';

	export let data: PageData;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div class="flex flex-col flex-grow">
	<header class="pt-4">
		<h1 class="text-2xl font-bold tracking-tight sm:text-4xl">
			Written thoughts on software engineering, leadership, and occasionally hobbies.
		</h1>
		<h3 class="mt-3 text-zinc-600 dark:text-zinc-400 flex items-center">
			<a href="/atom.xml" class="hover:stroke-red-400 ">
				Subscribe <RssIcon size="1x" class="inline-block ml-1 hover:stroke-red-400" />
			</a>
		</h3>
	</header>

	<div class="mt-16 sm:mt-20">
		<PostsList posts={data.posts} />
	</div>

	<!-- pagination -->
	<div class="flex items-center justify-between pt-16 pb-8">
		{#if !isFirstPage}
			<a href={`/blog/page/${data.page - 1}`} data-sveltekit-prefetch>
				<ArrowLeftIcon class="w-4 h-4" />
				Previous
			</a>
		{:else}
			<div />
		{/if}

		{#if hasNextPage}
			<a href={`/blog/page/${data.page + 1}`} data-sveltekit-prefetch
				>Next
				<ArrowRightIcon class="w-4 h-4" />
			</a>
		{/if}
	</div>
</div>

<style>
	a {
		@apply flex items-center gap-2 font-medium text-zinc-700;
	}

	:global(.dark) a {
		@apply text-zinc-300;
	}
</style>
