<script lang="ts">
	import '../app.css';
	import '../prism-material-light.css';
	import '../prism-material-dark.css';
	import { name } from '$lib/info';

	import { fly } from 'svelte/transition';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';

	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const headerLinks = [
		{ url: '/', label: 'Home' },
		{ url: '/blog', label: 'Blog' },
		{ url: 'https://www.linkedin.com/in/jackelkanderson/', label: 'LinkedIn' },
		{ url: 'https://www.github.com/jelkand', label: 'GitHub' }
	];

	let menuOpen = false;
</script>

<div id="core" class="flex flex-col min-h-screen">
	<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
		<header>
			<div class="flex h-16 px-4 py-2 justify-between items-center">
				<h2
					class="mr-auto !text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 dark:from-violet-500 dark:to-pink-500"
				>
					<a class="text-lg sm:text-2xl font-bold" href="/">
						{name}
					</a>
				</h2>

				<div class="flex-initial items-center m-3  md:block hidden">
					{#each headerLinks as link}
						<a class="m-1" href={link.url}>{link.label}</a>
					{/each}
				</div>

				<ThemeToggle />

				<div class="flex-initial items-center md:hidden m-3">
					<button class="flex items-center" on:click={() => (menuOpen = true)}><MenuIcon /></button>
				</div>
			</div>
			<!-- Mobile menu -->
			{#if menuOpen}
				<div
					class="h-full bg-white dark:bg-slate-600 z-40 fixed top-0 right-0 w-48 flex flex-col"
					transition:fly={{ x: 192, duration: 200 }}
				>
					<div class="flex justify-end w-full">
						<button on:click={() => (menuOpen = false)}><XIcon size="2x" /> </button>
					</div>
					<div class="flex flex-col items-start ">
						{#each headerLinks as link}
							<a class="m-4 text-lg text-right" href={link.url} on:click={() => (menuOpen = false)}
								>{link.label}</a
							>
						{/each}
						<div class="m-4">
							<ThemeToggle />
						</div>
					</div>
				</div>
			{/if}
		</header>

		<main
			on:click={() => (menuOpen = false)}
			class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full flex-grow py-4 px-4"
		>
			<slot />
		</main>
	</div>
</div>
