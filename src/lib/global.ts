import { BrowserStorage } from '$lib/storage';
import { Buffer } from 'buffer/';

export default function () {
	globalThis.storage = new BrowserStorage();

	const savegameLoaded = storage.get('savegameLoaded') as boolean;
	if (savegameLoaded === null) {
		storage.set('savegameLoaded', false);
		globalThis.savegameLoaded = false;
	}
	if (!savegameLoaded) {
		globalThis.savegameLoaded = false;
		const savegameLoadElement = document.getElementById('savegame-load');
		if (savegameLoadElement) {
			savegameLoadElement.style.display = 'flex';
		}
	} else {
		globalThis.savegameLoaded = true;
		globalThis.savegame = Buffer.from(storage.get('savegame') as string, 'base64');
		globalThis.savegameType = storage.get('savegameType') as 'garden_plus';
	}

	storage.watch('savegameLoaded', (loaded) => {
		if (loaded) {
			globalThis.savegameLoaded = true;
			const savegameLoadElement = document.getElementById('savegame-load');
			if (savegameLoadElement) {
				savegameLoadElement.style.display = 'none';
			}
		} else {
			globalThis.savegame = Buffer.alloc(0);
			globalThis.savegameLoaded = false;
			globalThis.savegameType = 'garden_plus';
			storage.set('savegame', '');
			storage.set('savegameType', 'garden_plus');
      const button = document.getElementById('leos-garden_plus') as HTMLButtonElement;
      button.disabled = false;
      button.innerText = 'Load Leo\'s town';
			const button2 = document.getElementById('leos-exhibition') as HTMLButtonElement;
      button2.disabled = false;
      button2.innerText = 'Load Leo\'s HH Showcase';
      const savegameLoadElement = document.getElementById('savegame-load');
			if (savegameLoadElement) {
				savegameLoadElement.style.display = 'flex';
			}
		}
	});

  storage.watch('savegame', (sg) => {
		if (sg !== '') {
			storage.set('savegameLoaded', true);
		};
	});
}

export function layoutGlobal() {
  const fileUpload = document.getElementById('savegame-file') as HTMLInputElement;
  fileUpload.addEventListener('change', () => {
    const file = fileUpload.files![0];
    if (!file) return;
    switch (file.name) {
      case 'garden_plus.dat':
        if (file.size !== 0x89b00) {
          alert('Invalid file size, expected 0x89b00 bytes!');
          return;
        }
        globalThis.savegameType = 'garden_plus';
        break;

      default:
        alert('Invalid savegame type, only garden_plus.dat is supported!');
        return;
    };
    const reader = new FileReader();
    reader.onload = () => {
      globalThis.savegame = Buffer.from(reader.result as ArrayBuffer);
      storage.set('savegame', savegame.toString('base64'));
    };
    reader.readAsArrayBuffer(file);
  });
}