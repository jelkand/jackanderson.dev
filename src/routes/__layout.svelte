<script lang="ts">
	import '../app.css';
	import '../prism-material-light.css';
	import '../prism-material-dark.css';

	import { fly } from 'svelte/transition';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';

	import { theme } from 'src/stores/theme';

	const headerLinks = [
		{ url: '/', label: 'Home' },
		{ url: '/blog', label: 'Blog' },
		{ url: 'https://www.linkedin.com/in/jackelkanderson/', label: 'LinkedIn' },
		{ url: 'https://www.github.com/jelkand', label: 'GitHub' }
	];

	let menuOpen = false;
</script>

<div id="core" data-mode={theme}>
	<!-- Links Mobile -->

	<div class="h-screen dark:bg-slate-600 dark:text-white">
		<header>
			<div class="flex items-center">
				<h1 class="font-barlow text-2xl md:text-3xl transition-all flex-auto m-2">
					<a href="/">Jack Anderson</a>
				</h1>
				<!-- Desktop Menu -->
				<div class="flex-initial items-center m-3  md:block hidden">
					{#each headerLinks as link}
						<a class="m-1" href={link.url}>{link.label}</a>
					{/each}
				</div>

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
					<div class="flex flex-col items-start">
						{#each headerLinks as link}
							<a class="m-4 text-lg text-right" href={link.url} on:click={() => (menuOpen = false)}
								>{link.label}</a
							>
						{/each}
					</div>
				</div>
			{/if}
		</header>
		<body on:click={() => (menuOpen = false)}>
			<slot />
		</body>
		<footer />
	</div>
</div>
