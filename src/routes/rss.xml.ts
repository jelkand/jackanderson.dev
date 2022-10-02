import { getPosts } from 'src/lib/get-posts';
import { name, website } from 'src/lib/info';
import { XMLBuilder } from 'fast-xml-parser';

export async function get() {
	const posts = await getPosts();
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	const obj = {
		'?xml': {
			'@version': '1.0',
			'@encoding': 'UTF-8'
		},
		rss: {
			'@xmlns:dc': 'http://purl.org/dc/elements/1.1/',
			'@xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
			'@xmlns:atom': 'http://www.w3.org/2005/Atom',
			'@version': '2.0',
			channel: {
				'atom:link': {
					'@href': `${website}/rss.xml`,
					'@rel': 'self',
					'@type': 'application/rss+xml'
				},
				title: name,
				link: website,
				description: 'A blog by Jack Anderson',
				item: posts.map((post) => ({
					guid: `${website}/${post.slug}`,
					title: post.title,
					link: `${website}/${post.slug}`,
					description: post.description
				}))
			}
		}
	};

	const builder = new XMLBuilder({
		ignoreAttributes: false,
		attributeNamePrefix: '@',
		arrayNodeName: 'item',
		unpairedTags: ['atom:link'],
		suppressUnpairedNode: true
	});

	const body = builder.build(obj);

	return {
		headers,
		body
	};
}
