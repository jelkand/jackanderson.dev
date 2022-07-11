<script>
	import Comments from 'src/components/Comments.svelte';
	import { format } from 'date-fns';
	export let title = '';
	export let date;
	// export let category;
	// export let description;
	// export let tags;

	const formattedDate = format(new Date(date), 'PPP');
</script>

<svelte:head>
	<title>{title}</title>
	<html lang="en" />
</svelte:head>

<div
	class="flex place-content-center prose-headings:font-barlow prose-code:font-roboto-mono mx-2 sm:m-auto"
>
	<article class="prose">
		<h1>{title}</h1>
		<h2>{formattedDate}</h2>
		<slot />
		<Comments />
	</article>
</div>
