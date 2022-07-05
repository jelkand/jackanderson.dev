<script lang="ts">
	import '../app.css';
	import '../prism-material-light.css';
	import '../prism-material-dark.css';

	import { theme } from 'src/stores/theme';

	// if (
	// 	localStorage.theme === 'dark' ||
	// 	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	// ) {
	// 	console.log('use dark');
	// 	document.documentElement.classList.add('dark');
	// } else {
	// 	document.documentElement.classList.remove('dark');
	// }

	// $: theme =
	// 	localStorage.theme === 'dark' ||
	// 	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	// 		? 'dark'
	// 		: 'light';
</script>

<div id="core" data-mode={theme}>
	<div class="h-screen bg-slate-200 dark:bg-slate-600 dark:text-white">
		<header>
			<div class="flex items-center">
				<h1 class="font-barlow text-2xl md:text-3xl transition-all flex-auto m-2">
					<a href="/">Jack Anderson</a>
				</h1>
				<!-- Links Desktop -->
				<div class="flex-initial items-center m-2">
					<a href="/blog">Blog</a>
				</div>
			</div>
		</header>

		<slot />

		<footer />
	</div>
</div>
