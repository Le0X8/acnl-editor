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
  };
}
