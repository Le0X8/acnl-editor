<script lang="ts">
	import '$styles/global.scss';
	import { onMount } from 'svelte';
	import { loadLeosSavegame } from '$lib/load';
	import { layoutGlobal } from '$lib/global';

  onMount(() => {
    layoutGlobal();
  });

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
  <button onclick={() => loadLeosSavegame('garden_plus')} id="leos-garden_plus">Load Leo's town</button>
  <button onclick={() => loadLeosSavegame('exhibition')} id="leos-exhibition">Load Leo's HH Showcase</button>
</div>

{@render children()}
