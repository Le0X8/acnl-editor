<script lang="ts">
	import itemList from '$lib/itemList.json';
	import { get } from 'svelte/store';

	let {
		id = '',
		items = [] as {
			id: number;
			flag1: number;
			flag2: number;
		}[],
		height = 1,
		width = items.length,
		currentItem = $bindable({
			id: 0x7ffe,
			flag1: 0,
			flag2: 0
		}),
		getDefault = (pos: number) => items[pos]
	} = $props();

	const rows = $state(
		Array.from({ length: height }, (_, row) => items.slice(row * width, row * width + width))
	);

	function getIconId(id: number): string {
		if (id > 0x212a && id < 0x2186) return 'song';
		if (id > 0x234b && id < 0x23eb) return 'wallpaper';
		if (id > 0x23ea && id < 0x2493) return 'floor';
		if (id > 0x2494 && id < 0x2681) return 'shirt';
		if (id > 0x27e5 && id < 0x280b) return 'umbrella';
		if (id > 0x295b && id < 0x29df) return 'gyroid';
		if (id == 0x7ffe) return 'empty';
		return 'leaf';
	}
</script>

<div class="itemlist" {id}>
	{#each rows as row, i}
		<div class="itemrow">
			{#each row as item, j}
				<button
					class="item"
					onclick={(ev) => {
						ev.preventDefault();
						ev.stopPropagation();

						item.id = currentItem.id;
						item.flag1 = currentItem.flag1;
						item.flag2 = currentItem.flag2;
					}}
					oncontextmenu={(ev) => {
						ev.preventDefault();
						ev.stopPropagation();

						currentItem = item;
					}}
					onauxclick={(ev) => {
						if (ev.button !== 1) return;
						ev.preventDefault();
						ev.stopPropagation();

						const defaultItem = getDefault(i * width + j);
						item.id = defaultItem.id;
						item.flag1 = defaultItem.flag1;
						item.flag2 = defaultItem.flag2;
					}}
				>
					<img
						src="/items/{getIconId(item.id)}.png"
						alt="Item icon"
						class="item-icon"
						draggable="false"
					/>
					<div class="tooltip">
						{#if itemList[item.id] !== null}
							<span class="name">{itemList[item.id]}</span>
						{/if}
						<span class="meta">
							<span class="id">{item.id.toString(16).padStart(4, '0')}</span>
							<span class="flag1">{item.flag1.toString(16).padStart(2, '0')}</span>
							<span class="flag2">{item.flag2.toString(16).padStart(2, '0')}</span>
							<span class="default">
								{getDefault(i * width + j).id == item.id &&
								getDefault(i * width + j).flag1 == item.flag1 &&
								getDefault(i * width + j).flag2 == item.flag2
									? '✓'
									: '✗'}
							</span>
						</span>
					</div>
				</button>
			{/each}
		</div>
	{/each}
</div>
