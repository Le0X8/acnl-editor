<script lang="ts">
	import Tabs from '$c/Tabs.svelte';
	import { TownEditor } from '$lib/town';

	const town = new TownEditor();
	const players = town.getPlayers();
</script>

<Tabs titles={['Players']}>
	<div>
		<Tabs titles={players.map((_, i) => (i === 0 ? `Mayor` : `Resident ${i}`))}>
			{#each players as player, i}
				<div>
					<label for="player-{i}-name">Name:</label>
					<input id="player-{i}-name" type="text" bind:value={player.name} />
				</div>
			{/each}
		</Tabs>
	</div>
</Tabs>
