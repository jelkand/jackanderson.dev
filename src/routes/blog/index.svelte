<script>
	import { compareDesc } from 'date-fns';

	import { allPosts } from './_importer';

	$: sortedPosts = allPosts.sort((a, b) => compareDesc(a.date, b.date));
</script>

<div class="flex place-content-center">
	<ul>
		{#each sortedPosts as post}
			<li class="m-2">
				<h2 class="text-xl"><a href="/blog/{post.slug}">{post.title}</a></h2>
				<p class="italic">{post.description}</p>
			</li>
		{/each}
	</ul>
</div>
