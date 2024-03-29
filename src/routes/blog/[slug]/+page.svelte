<script lang="ts">
	import Comments from '$lib/components/Comments.svelte';
	import { format, parseISO } from 'date-fns';
	import { name, website, avatar, bio } from '$lib/info';
	import ToC from '$/lib/components/ToC.svelte';
	import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import { afterNavigate } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.post.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;

	const url = `${website}/${data.post.slug}`;

	let showBackButton = false;
	afterNavigate(({ from }) => {
		// only show back button if we navigated from within the site
		showBackButton = !!from;
	});
</script>

<svelte:head>
	<title>{data.post.title} - {name}</title>
	<meta name="description" content={data.post.preview.text} />
	<meta name="author" content={name} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.preview.text} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={website} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={data.post.title} />
	<meta name="twitter:description" content={data.post.preview.text} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex">
	<div class="relative w-full max-w-2xl min-w-full">
		{#if showBackButton}
			<button
				class="absolute items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
				type="button"
				aria-label="Go back to posts"
				on:click={() => {
					window.history.back();
				}}
			>
				<ArrowLeftIcon
					class="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
				/>
			</button>
		{/if}

		<article>
			<header class="flex flex-col">
				<h1
					class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
				>
					{data.post.title}
				</h1>
				<div class="flex items-center text-base text-zinc-400 dark:text-zinc-500 mt-3">
					<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
					<time dateTime={data.post.date}>
						<span class="ml-3">{format(new Date(parseISO(data.post.date)), 'MMMM d, yyyy')}</span>
					</time>
					<span class="mx-2">•</span>
					<span>{data.post.readingTime}</span>
				</div>
			</header>

			<!-- render the post -->
			<div class="prose dark:prose-invert ">
				<svelte:component this={data.component} />
			</div>
		</article>

		<!-- bio -->
		<hr />
		<div class="py-8">
			<div class="grid gap-8">
				<div class="flex justify-center order-1 col-span-2 gap-6 md:order-2">
					<SocialLinks />
				</div>
				<div class="flex justify-center order-2 md:order-1 md:col-span-2">
					<a href="/" class="inline-block rounded-full">
						<img
							src={avatar}
							alt={name}
							class="w-24 h-24 mx-auto rounded-full md:w-28 md:h-28 ring-2 ring-zinc-200 dark:ring-zinc-700"
						/>
					</a>
				</div>
				<p class="order-3 text-base text-zinc-600 dark:text-zinc-400">
					{bio}
				</p>
			</div>
		</div>
	</div>

	<!-- table of contents -->
	<div class="hidden xl:block">
		<aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">
			<ToC post={data.post} />
		</aside>
	</div>
</div>

<Comments />
