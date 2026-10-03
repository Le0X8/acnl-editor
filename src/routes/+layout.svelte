<script lang="ts">
	import './layout.css';
	import logo from '#lib/resources/logo.png';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="shortcut icon" href={logo} />
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta
		name="viewport"
		content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
	/>
	<meta name="description" content="An Animal Crossing: New Leaf town and items editor." />
	<meta
		name="keywords"
		content="animal, crossing, new, leaf, save, editor, ram, town, pockets, items, hack, exploit"
	/>
</svelte:head>

<ModeWatcher />

{@render children()}
