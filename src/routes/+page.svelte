<script lang="ts">
	import ShowcaseEditor from '$c/ShowcaseEditor.svelte';
	import TownEditor from '$c/TownEditor.svelte';
	import global from '$lib/global';
	import { unloadSavegame, downloadSavegame } from '$lib/load';
	import { onMount } from 'svelte';

	let savegameLoaded = $state(false);
	let savegameType = $state('garden_plus');
	onMount(() => {
		global();
		savegameLoaded = storage.get('savegameLoaded') as boolean;
		savegameType = storage.get('savegameType') as string;

		storage.watch('savegameLoaded', (value) => {
			savegameLoaded = value as boolean;
		});
		storage.watch('savegameType', (value) => {
			savegameType = value as string;
		});
	});
</script>

{#if savegameLoaded}
	<div id="savegame-loaded">
		<span>
			{#if savegameType === 'garden_plus'}Town savegame (Welcome Amiibo){/if}
			{#if savegameType === 'exhibition'}HH Showcase{/if}
		</span>
		loaded. ({savegameType}.dat)
		<button onclick={() => unloadSavegame()}>Unload</button>
		<button onclick={() => downloadSavegame()}>Download</button>
	</div>

	{#if savegameType === 'garden_plus'}
		<TownEditor />
	{/if}
	{#if savegameType === 'exhibition'}
		<ShowcaseEditor />
	{/if}
{:else}
	No savegame loaded.
{/if}
