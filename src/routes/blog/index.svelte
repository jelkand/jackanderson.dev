<script lang="ts">
	import { compareDesc } from 'date-fns';
	import PostCard from 'src/components/PostCard.svelte';
	import { allPosts } from './_importer';

	$: sortedPosts = allPosts.sort((a, b) => compareDesc(a.date, b.date));
</script>

<div class="flex place-content-center">
	<ul>
		{#each sortedPosts as post}
			<PostCard {post} />
		{/each}
	</ul>
</div>
