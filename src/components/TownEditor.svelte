<script lang="ts">
	import Tabs from '$c/Tabs.svelte';
	import { parseGardenPlusDat } from 'acnl';
	import { villagers as vList } from '$lib/villagers';
	import Item from '$c/Item.svelte';

	const villagers = vList.map((v) => ({
		name: (v[0] as string[])[0],
		defaultItems: (v[5] as number[]).map((id) => ({ id, flag1: 0, flag2: 0 })),
	}));

	const getV = (id: number) => villagers[id];

	const town = $state(parseGardenPlusDat(globalThis.savegame));

	let currentItem = $state({
		id: 0x7ffe,
		flag1: 0,
		flag2: 0,
	});
</script>

<Tabs titles={['Players', 'Villagers']}>
	<div>
		<Tabs titles={town.players.map((_, i) => (i === 0 ? `Mayor` : `Resident ${i}`))}>
			{#each town.players as player, i}
				<div>
					<label for="player-{i}-name">Name:</label>
					<input id="player-{i}-name" type="text" value={player.personalId.name.split('\0')[0]} />
					<label for="player-{i}-id">ID:</label>
					<input
						id="player-{i}-id"
						type="text"
						disabled
						value={'0x' + player.personalId.id.toString(16)}
					/>
					<label for="player-{i}-gender">Gender:</label>
					<select
						id="player-{i}-gender"
						value={player.personalId.gender}
					>
						<option value={0}>Male</option>
						<option value={1}>Female</option>
					</select>
				</div>
			{/each}
		</Tabs>
	</div>
	<div>
		<Tabs titles={town.villagerData.villagers.map((_, i) => `Villager ${i + 1}`)}>
			{#each town.villagerData.villagers as villager, i}
				<div>
					<img src="/villagers/{villager.id}.png" alt="Villager head" class="villager-head">
					<br />
					<div>
						<label for="villager-{i}-id">ID:</label>
						<input id="villager-{i}-id" type="text" bind:value={villager.id} />
					</div>
					<div>
						<label for="villager-{i}-name">Name:</label>
						<select id="villager-{i}-name" bind:value={villager.id}>
							{#each villagers as v, j}
								<option value={j}>{v.name}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="villager-{i}-wallpaper">Wallpaper:</label>
						<Item id="villager-{i}-wallpaper" items={[villager.wallpaper]} bind:currentItem getDefault={() => getV(villager.id).defaultItems[2]} />
					</div>
					<div>
						<label for="villager-{i}-floor">Floor:</label>
						<Item id="villager-{i}-floor" items={[villager.floor]} bind:currentItem getDefault={() => getV(villager.id).defaultItems[3]} />
					</div>
					<div>
						<label for="villager-{i}-song">Song:</label>
						<Item id="villager-{i}-song" items={[villager.song]} bind:currentItem getDefault={() => getV(villager.id).defaultItems[1]} />
					</div>
					<div>
						<label for="villager-{i}-shirt">Shirt:</label>
						<Item id="villager-{i}-shirt" items={[villager.shirt]} bind:currentItem getDefault={() => getV(villager.id).defaultItems[0]} />
					</div>
					<div>
						<label for="villager-{i}-umbrella">Umbrella:</label>
						<Item id="villager-{i}-umbrella" items={[villager.umbrella]} bind:currentItem getDefault={() => getV(villager.id).defaultItems[4]} />
					</div>
					<div>
						<label for="villager-{i}-furniture">Furniture:</label>
						<Item id="villager-{i}-furniture" items={villager.furniture} width={8} height={2} bind:currentItem getDefault={(pos: number) => getV(villager.id).defaultItems[5 + pos]} />
					</div>
				</div>
			{/each}
		</Tabs>
	</div>
</Tabs>
