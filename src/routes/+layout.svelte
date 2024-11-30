<script lang="ts">
	import '$styles/global.scss';
	import { onMount } from 'svelte';
	import { loadLeosSavegame } from '$lib/load';

	let { children } = $props();
</script>

<noscript> Please enable JavaScript to view this page. </noscript>

<nav></nav>
<div id="savegame-load">
  <h1>Leo's ACNL Savegame Editor</h1>

	Savegame is NOT loaded.
  
  <h3>Load savegame</h3>
  <input type="file" id="savegame-file" accept=".dat" />
  or
  <button onclick={loadLeosSavegame} id="leos-savegame">Load Leo's savegame</button>
</div>

{@render children()}
