<script lang="ts">
	import { onMount } from 'svelte';

	let { children, titles = [] } = $props();

	const id = Math.random().toString(36).substring(2);

	let active = $state(0);
	function tab(i: number) {
		if (i === active) return;
		const content = document.getElementById('tabs-' + id + '-content') as HTMLDivElement;
		(content.children[active] as HTMLDivElement).style.display = 'none';
		(content.children[i] as HTMLDivElement).style.display = 'block';
		active = i;
	}

	onMount(() => {
		const content = document.getElementById('tabs-' + id + '-content') as HTMLDivElement;
		(content.children[active] as HTMLDivElement).style.display = 'block';
	});
</script>

<div class="tabs-tabs">
	{#each titles as title, i}
		<button onclick={() => tab(i)} class={active == i ? 'active' : ''}>{title}</button>
	{/each}
</div>

<div class="tabs-content" id={'tabs-' + id + '-content'}>
	{@render children()}
</div>
