import { browser } from '$app/environment';
import { format } from 'date-fns';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time';
import type { Metadata } from '$lib/types/Metadata';

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`posts can only be imported server-side`);
}

// Get all posts and add metadata
export const posts = Object.entries(
	import.meta.glob<{ metadata: Metadata; default: { render: () => { html: string } } }>(
		'/posts/**/*.md',
		{
			eager: true
		}
	)
)
	.map(([filepath, post]) => {
		const html = parse(post.default.render().html);
		const preview = post.metadata.preview ? parse(post.metadata.preview) : html.querySelector('p');

		return {
			...post.metadata,

			// generate the slug from the file path
			slug: filepath
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop(),

			// whether or not this file is `my-post.md` or `my-post/index.md`
			// (needed to do correct dynamic import in posts/[slug].svelte)
			isIndexFile: filepath.endsWith('/index.md'),

			// format date as yyyy-MM-dd
			date: post.metadata.date
				? format(
						// offset by timezone so that the date is correct
						addTimezoneOffset(new Date(post.metadata.date)),
						'yyyy-MM-dd'
				  )
				: format(new Date(), 'yyyy-MM-dd'),

			preview: {
				html: preview && preview.toString(),
				// text-only preview (i.e no html elements), used for SEO
				text: preview?.structuredText ?? preview?.toString()
			},

			// get estimated reading time for the post
			readingTime: readingTime(html.structuredText).text
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1],
		previous: allPosts[index + 1]
	}));

function addTimezoneOffset(date: Date) {
	const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000;
	return new Date(new Date(date).getTime() + offsetInMilliseconds);
}
