import { Buffer } from 'buffer/';

export async function loadSavegame() {}

export async function loadLeosSavegame(type: 'garden_plus' | 'exhibition' = 'garden_plus') {
	const button = document.getElementById('leos-' + type) as HTMLButtonElement;
	button.disabled = true;
	button.innerText = 'Loading...';

	try {
		const result = await fetch(
			'https://raw.githubusercontent.com/Le0X8/acnl-savegame/main/' + type + '.dat'
		);
		globalThis.savegame = Buffer.from(await result.arrayBuffer());
		globalThis.savegameType = type;
	} catch (error) {
		console.error(error);
		button.innerText = 'Failed to load savegame';
		setTimeout(() => {
      let typeString;
      switch (type) {
        case 'garden_plus':
          typeString = 'town';
          break;
        case 'exhibition':
          typeString = 'HH Showcase';
          break;
      }
			button.innerText = "Load Leo's " + typeString;
			button.disabled = false;
		}, 1500);
		return;
	}
	storage.set('savegame', savegame.toString('base64'));
	storage.set('savegameType', type);

	button.innerText = 'Loaded!';
	(document.getElementById('savegame-load') as HTMLDivElement).style.display = 'none';
}

export function unloadSavegame() {
	if (confirm('Are you sure you want to unload the savegame? You will lose all unsaved progress.'))
		storage.set('savegameLoaded', false);
}

export function downloadSavegame() {
	const savegame = globalThis.savegame;
	const blob = new Blob([savegame], { type: 'application/octet-stream' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = globalThis.savegameType + '.dat';
	a.click();
	URL.revokeObjectURL(url);
}
