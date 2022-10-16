<script lang="ts">
	import '../app.css';
	import '../prism-material-dark.css';
	import { name } from '$lib/info';

	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const headerLinks = [
		{ url: '/', label: 'Home' },
		{ url: '/blog', label: 'Blog' },
		{ url: 'https://www.linkedin.com/in/jackelkanderson/', label: 'LinkedIn' },
		{ url: 'https://www.github.com/jelkand', label: 'GitHub' }
	];
</script>

<div class="flex flex-col min-h-screen">
	<div class="flex flex-col flex-grow w-full px-4 py-2">
		<header class="flex items-center justify-between w-full max-w-2xl py-4 mx-auto lg:pb-8">
			<a
				class="text-lg font-bold sm:text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 dark:to-teal-400"
				href="/"
			>
				{name}
			</a>

			<ThemeToggle />
		</header>
		<main class="flex flex-col flex-grow w-full max-w-2xl mx-auto">
			<slot />
		</main>
	</div>
</div>
