import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { Theme } from '$lib/types/Theme';

const storedTheme = browser ? window.localStorage.getItem('theme') : Theme.Light;
export const theme = writable(storedTheme);
theme.subscribe((value) => {
	if (browser) localStorage.setItem('theme', value === Theme.Dark ? Theme.Dark : Theme.Light);
});

export { theme as default };
