import type { Buffer } from 'buffer/';

const offsets = {
	players: 0xa0,

	player: {
		size: 0xa480,
		name: 0x55a8,
		regYear: 0x55d6,
		regMonth: 0x55d8,
		regDay: 0x55d9
	}
};

export type Player = {
	name: string;
	registered: Date;
};

export class TownEditor {
	getPlayers(): Player[] {
		const players = [];
		for (let i = 0; i < 4; i++) {
			const offset = offsets.players + i * offsets.player.size;
			const nameOffset = offset + offsets.player.name;
			const name = (globalThis.savegame.subarray(nameOffset, nameOffset + 9) as Buffer)
				.toString('utf16le')
				.split('\0')[0];
			const registeredYear = globalThis.savegame.readUInt16LE(offset + offsets.player.regYear);
			const registeredMonth = globalThis.savegame.readUInt8(offset + offsets.player.regMonth);
			const registeredDay = globalThis.savegame.readUInt8(offset + offsets.player.regDay);

			if (name.length > 0)
				players.push({
					name,
					registered: new Date(
						`\
${registeredYear.toString(10).padStart(4, '0')}-\
${registeredMonth.toString(10).padStart(2, '0')}-\
${registeredDay.toString(10).padStart(2, '0')}\
`
					)
				});
		}
		console.log(players);
		return players;
	}
}
