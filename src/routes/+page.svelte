<script lang="ts">
	import Tabs from '$c/Tabs.svelte';
  import global from '$lib/global';
	import { onMount } from 'svelte';

	let savegameLoaded = $state(false);
	onMount(() => {
    global();
		savegameLoaded = storage.get('savegameLoaded') as boolean;

		storage.watch('savegameLoaded', (value) => {
			savegameLoaded = value as boolean;
		});
	});
</script>

<p>
	{#if savegameLoaded}
		Savegame loaded. <button>Unload</button>
	{:else}
		No savegame loaded.
	{/if}
</p>

<Tabs titles={['Player 1', 'Player 2', 'Player 3', 'Player 4']}>
	<div>Player 1</div>
	<div>Player 2</div>
	<div>Player 3</div>
	<div>Player 4</div>
</Tabs>
