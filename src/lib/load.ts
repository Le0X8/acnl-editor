import { Buffer } from 'buffer/';

export async function loadSavegame() {}

export async function loadLeosSavegame() {
  const button = document.getElementById('leos-savegame') as HTMLButtonElement;
  button.disabled = true;
  button.innerText = 'Loading...';

  try {
    const result = await fetch('https://raw.githubusercontent.com/Le0X8/acnl-savegame/main/garden_plus.dat');
    globalThis.savegame = Buffer.from(await result.arrayBuffer());
    globalThis.savegameType = 'garden_plus';
  } catch (error) {
    console.error(error);
    button.innerText = 'Failed to load savegame';
    setTimeout(() => {
      button.innerText = 'Load Leo\'s Savegame';
      button.disabled = false;
    }, 1500);
    return;
  }
  storage.set('savegame', savegame.toString('base64'));
  storage.set('savegameLoaded', true);
  storage.set('savegameType', 'garden_plus');

  button.innerText = 'Loaded!';
  (document.getElementById('savegame-load') as HTMLDivElement).style.display = 'none';
}