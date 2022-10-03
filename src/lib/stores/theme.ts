import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storedTheme = browser ? window.localStorage.getItem('theme') : 'light';
export const theme = writable(storedTheme);
theme.subscribe((value) => {
	if (browser) localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light');
});

export { theme as default };
