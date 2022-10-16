// referencing https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/util.js
export function paginate<T>(
	data: T[],
	{ page = 1, limit }: { page?: number; limit?: number } = {}
) {
	if (limit) {
		return data.slice((page - 1) * limit, page * limit);
	}

	return data;
}
