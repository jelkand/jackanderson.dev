// referencing https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/info.js

/**
 * Used for the header of the page and in SEO
 */
export const firstName = 'Jack';
export const lastName = 'Anderson';
export const name = `${firstName} ${lastName}`;

/**
 * Used for SEO in /posts/[slug]
 */
export const website = 'https://jackanderson.dev/';

// Used for the landing page & footer of posts
export const avatar = '/images/avatar.png';
export const bio = `\
I’m ${firstName}, a staff software engineer based in North Carolina. I work at Atomic Financial,
modernizing direct deposit switching. Lately, I've been working on conversion, experimentation, and
building teams. In the past, I've worked at Earnest, Impossible Bureau, NICE InContact, and Goldman Sachs.
`;

export const github = 'jelkand';
export const twitter = 'andersjack';
export const linkedin = 'jackelkanderson';
