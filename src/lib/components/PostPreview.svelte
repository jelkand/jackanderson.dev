<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	import type { Post } from '$lib/types/Post';
	import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte';

	export let post: Post;
</script>

<Card href={`/blog/${post.slug}`}>
	<slot slot="eyebrow" name="eyebrow" />
	<slot slot="title">{post.title}</slot>
	<!-- tweak so that we offer a preview and the subtitle -->
	<div slot="description" class="prose dark:prose-invert">
		{@html post.description}
	</div>
	<div slot="preview" class="prose dark:prose-invert">
		{@html post?.preview?.html}
	</div>

	<div slot="actions">
		<div class="flex items-center text-teal-500">
			<span class="text-sm font-medium">Read</span>
			<ArrowRightIcon class="w-4 h-4 ml-1" />
		</div>
	</div>
</Card>

<style>
	.prose > :global(p) {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
