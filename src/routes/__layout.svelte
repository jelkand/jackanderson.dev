<script>
	import '../app.css';
	import '../prism-material-light.css';
	import '../prism-material-dark.css';
</script>

<div class="h-screen">
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
