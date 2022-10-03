<script lang="ts">
	import type { Post } from '$lib/types/Post';

	export let post: Post;
</script>

<li class="m-2">
	<h2 class="text-xl"><a href="/blog/{post.slug}">{post.title}</a></h2>
	<p class="italic">{post.description}</p>
</li>
