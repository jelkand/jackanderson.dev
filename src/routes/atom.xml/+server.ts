import { posts } from '$lib/data/posts';
import { name, website } from '$lib/info';
import { formatRFC3339 } from 'date-fns';
import { XMLBuilder } from 'fast-xml-parser';
import type { RequestHandler } from './$types';
export const prerender = true;

const websiteDescription = `Jack Anderson`;
const postsUrl = `${website}/blog`;

export const GET: RequestHandler = () => {
	const data = {
		'?xml': {
			'@version': '1.0',
			'@encoding': 'UTF-8'
		},
		feed: {
			'@xmlns': 'http://www.w3.org/2005/Atom',
			title: name,
			link: {
				'@href': `${website}/atom.xml`,
				'@rel': 'self',
				'@type': 'application/atom+xml'
			},
			// link: {
			// 	'@href': website
			// },
			updated: formatRFC3339(new Date(posts[0].date)),
			author: {
				name: 'Jack Anderson',
				email: 'jack@jackanderson.dev'
			},
			id: website,
			subtitle: 'A blog by Jack Anderson',
			entry: posts.map((post) => ({
				id: `${website}/${post.slug}`,
				title: post.title,
				link: {
					'@rel': 'alternate',
					'@href': `${website}/${post.slug}`
				},
				updated: formatRFC3339(new Date(post.date)),
				published: formatRFC3339(new Date(post.date)),
				summary: post.description
			}))
		}
	};
	const builder = new XMLBuilder({
		ignoreAttributes: false,
		attributeNamePrefix: '@',
		arrayNodeName: 'entry',
		unpairedTags: ['atom:link'],
		suppressUnpairedNode: true
	});

	const xml = builder.build(data);

	return new Response(xml, {
		headers: { 'Cache-Control': `max-age=0, s-max-age=600`, 'Content-Type': 'application/xml' }
	});
};
