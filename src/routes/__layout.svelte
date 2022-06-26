<script>
	import '../app.css';
</script>

<svelte:head>
	<div id="hyvor-talk-view" />
	<script type="text/javascript">
		var HYVOR_TALK_WEBSITE = 7312;
		var HYVOR_TALK_CONFIG = {
			url: false,
			id: false
		};
	</script>
	<script async type="text/javascript" src="//talk.hyvor.com/web-api/embed.js"></script>
</svelte:head>

<slot />
