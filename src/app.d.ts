import { BrowserStorage } from '$lib/storage';
import { Buffer } from 'buffer/';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// eslint-disable-next-line no-var
	var storage: BrowserStorage;
	// eslint-disable-next-line no-var
	var savegame: Buffer;
	// eslint-disable-next-line no-var
	var savegameType: 'garden_plus' | 'exhibition';
	// eslint-disable-next-line no-var
	var savegameLoaded: boolean;
}

export {};
