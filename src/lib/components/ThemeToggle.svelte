<script lang="ts">
	import { SunIcon, MoonIcon } from 'svelte-feather-icons';

	import { browser } from '$app/environment';
	import { Theme } from '$lib/types/Theme';

	let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;

	function disableTransitionsTemporarily() {
		document.documentElement.classList.add('[&_*]:!transition-none');
		window.setTimeout(() => {
			document.documentElement.classList.remove('[&_*]:!transition-none');
		}, 0);
	}
</script>

{#if browser}
	<button
		type="button"
		role="switch"
		aria-label="Toggle Dark Mode"
		aria-checked={true}
		class="h-4 w-4 sm:h-8 sm:w-8 sm:p-1"
		on:click={() => {
			isDarkMode = !isDarkMode;
			localStorage.setItem('isDarkMode', isDarkMode.toString());

			disableTransitionsTemporarily();

			if (isDarkMode) {
				document.querySelector('html')?.classList.add(Theme.Dark);
			} else {
				document.querySelector('html')?.classList.remove(Theme.Dark);
			}
		}}
	>
		<MoonIcon class="text-slate-500 hidden dark:block" />
		<SunIcon class="text-slate-400 block dark:hidden" />
	</button>
{/if}
