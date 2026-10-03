<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Select from '#c/ui/select/index.ts';

	function copyToClipboard(text: string) {
		var input = document.createElement('input');
		input.value = text;

		document.body.appendChild(input);

		input.select();
		input.setSelectionRange(0, 99999); /* mobile fix */

		document.execCommand('copy');

		document.body.removeChild(input);
	}

	let charCode: number = $state(0);
	$effect(() => {
		if (charCode > 0) {
			console.log(`Copying character code ${charCode} to clipboard`);
			copyToClipboard(String.fromCharCode(charCode));
		}
	});
</script>

<svelte:head>
	<title>Help - Animal Crossing: New Leaf Save Editor</title>
	<link rel="shortcut icon" href="/resources/logo.png" />
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta
		name="viewport"
		content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
	/>
	<meta name="description" content="An Animal Crossing: New Leaf town and items editor." />
	<meta
		name="keywords"
		content="animal, crossing, new, leaf, save, editor, ram, town, pockets, items, hack, exploit"
	/>
</svelte:head>

{#snippet link(text: string, href: string)}
	<a
		{href}
		rel="noopener noreferrer"
		class={[
			'text-green-700 dark:text-green-600',
			'underline',
			'hover:no-underline',
			'focus:no-underline'
		]}
	>
		{text}
	</a>
{/snippet}

<article class={['max-w-240', 'mx-auto', 'mb-8']}>
	<hgroup
		class={[
			'flex',
			'w-full',
			'bg-green-700 dark:bg-green-600',
			'text-white',
			'px-6',
			'py-4',
			'my-12',
			'rounded-lg',
			'text-2xl',
			'font-bold',
			'justify-center',
			'items-center'
		]}
	>
		<img src="/resources/logo.png" alt="ACNL Save Editor Logo" class={['h-12']} />
		<h1 class={['mx-auto']}>Animal Crossing: New Leaf Save Editor</h1>
	</hgroup>

	<p>
		{@render link('Animal Crossing: New Leaf Save Editor', resolve('/'))} lets you edit your Animal Crossing:
		New Leaf savegame.
	</p>

	<h2 class={['font-bold', 'mt-4']}>Features:</h2>

	<ul class={['list-disc', 'list-outside', 'ml-8']}>
		<li>can edit any ACNL savegame (including Welcome Amiibo)</li>
		<li>
			can edit your town
			<ul class={['list-disc', 'list-outside', 'ml-8']}>
				<li>acres, river, waterfalls and ponds</li>
				<li>name, town hall and train station roof colors</li>
				<li>move buildings, houses, rocks and more at your own</li>
			</ul>
		</li>
		<li>can edit your player characters (name, face and gender, TPC pic, inventory and rooms)</li>
		<li>can edit your villagers (animals, campsite and caravan zone)</li>
		<li>
			other cool things
			<ul class={['list-disc', 'list-outside', 'ml-8']}>
				<li>put all perfect fruit trees in your town</li>
				<li>put both police stations in your town</li>
				<li>put anything in the beach, the river or the island</li>
				<li>put various plaza tree anywhere</li>
				<li>let Holden/Filly join your town</li>
				<li>get a tan even in winter</li>
				<li>change ground grass shape</li>
				<li>place unused players' patterns on ground</li>
				<li>...and more!</li>
			</ul>
		</li>
	</ul>

	<p class={['mt-4']}>
		Please read the {@render link('Instructions', resolve('/help#howto'))} and the {@render link(
			'FAQ',
			resolve('/help#faq')
		)}
		carefully.
	</p>

	<p class={['bg-red-600', 'text-white', 'font-bold', 'text-center', 'p-4', 'rounded-lg', 'my-4']}>
		This app can damage your savegame if not used correctly. I'm not responsible of any data lost.
		<br />
		Be careful when editing your savegame, always keep backups of your savegame.
	</p>

	<hr class={['my-8']} />

	<h2
		id="howto"
		class={[
			'border-l-6',
			'border-green-700 dark:border-green-600',
			'text-green-700 dark:text-green-600',
			'font-bold',
			'pl-4',
			'text-2xl',
			'my-8'
		]}
	>
		How to dump and inject AC:NL savegame
	</h2>
	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Requirements
	</h3>
	<ul class={['list-disc', 'list-outside', 'ml-8']}>
		<li>a hacked Nintendo 3DS/XL, New Nintendo 3DS/XL, Nintendo 2DS or New Nintendo 2DS XL</li>
		<li>retail/digital version of AC:NL with or without Welcome amiibo update</li>
		<li>an updated web browser (recommended: {@render link('Firefox', 'https://firefox.com/')})</li>
	</ul>

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Hack your 3DS
	</h3>

	<p>
		Follow {@render link('this guide', 'https://3ds.hacks.guide/')} in order to hack your 3DS. This is
		a necessary step. You will only need to do this once.
	</p>
	<p>
		The guide above will install a CFW (along
		{@render link('Checkpoint', 'https://github.com/FlagBrew/Checkpoint/')}) that allows to run
		unsigned code in your 3DS. This will allow us to run
		{@render link('Checkpoint', 'https://github.com/FlagBrew/Checkpoint/')}, which is a simple
		program that can extract AC:NL (and other games aswell) savegame then reinsert it after being
		edited with the editor.
	</p>

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Extract savegame
	</h3>
	<ol class={['list-decimal', 'list-outside', 'ml-8']}>
		<li>Open <strong>Homebrew Launcher</strong></li>
		<li>Open <strong>Checkpoint</strong></li>
		<li>Choose <strong>AC:NL icon</strong> and press A</li>
		<li>Choose <strong>Backup (L)</strong> and type a name for the savegame backup</li>
		<li>Power down the console, take out the SD card and put in the PC</li>
	</ol>

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Insert savegame
	</h3>
	<ol class={['list-decimal', 'list-outside', 'ml-8']}>
		<li>
			Browse your SD card and make a backup of <strong
				>/3DS/Checkpoint/saves/Animal Crossing New Leaf/[your_savegame_name]/</strong
			> entire folder
		</li>
		<li>
			Open <strong
				>/3DS/Checkpoint/saves/Animal Crossing New Leaf/[your_savegame_name]/garden.dat (or
				garden_plus.dat)</strong
			>
			file with {@render link('AC:NL Save Editor', resolve('/'))} and edit it to your desire
		</li>
		<li>
			Save the edited town as <b
				>/3DS/Checkpoint/saves/Animal Crossing New Leaf/[your_savegame_name]/garden.dat (or
				garden_plus.dat)</b
			>
			in the SD
			<small>(make sure you are overwriting the original file and not creating a copy)</small>
		</li>
		<li>Insert the SD card in the console</li>
		<li>Open <strong>Homebrew Launcher</strong></li>
		<li>Open <strong>Checkpoint</strong></li>
		<li>Choose <strong>AC:NL icon</strong> and press A</li>
		<li>Choose <strong>Restore (R)</strong> and select [your_savegame_name] folder</li>
		<li>Run AC:NL and get ingame, your changes should be there!</li>
	</ol>

	<!--
<h3>Important note</h3>
The game has an anti-cheat protection, so you cannot inject an old savegame or another's player savegame.<br/>
Make sure you always inject the latest savegame, dump it before editing as it's explained here and you will be fine.<br/>
Alternatively you can use <span class="app-icon purple"> </span> svdt which skips the anti-cheat protection for you.
-->

	<hr class={['my-8']} />

	<h2
		id="faq"
		class={[
			'border-l-6',
			'border-green-700 dark:border-green-600',
			'text-green-700 dark:text-green-600',
			'font-bold',
			'pl-4',
			'text-2xl',
			'my-8'
		]}
	>
		FAQ
	</h2>

	<!-- <h3>Will I be banned if I play online with a hacked savegame?</h3>
Yes, you might be banned from online functions if you change your TPC pic and use the Club Tortimer.<br/> -->

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		How can I rotate furniture in rooms?
	</h3>
	<p>Right click on the desired furniture then left click to rotate it.</p>

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		How can I place perfect fruit trees?
	</h3>
	<p>
		Select the desired tree in the Current item dropdown menu, then choose Perfect 4 in the Flag 1
		dropdown menu. You can even put non-native perfect fruit trees!
	</p>
	<p>
		You can also place rare mixed perfect fruit trees (2 normal fruit+1 perfect fruit). Right click
		on any of your normal fruit trees in your town, choose 0x01 mixed perfect in the Flag 2 dropdown
		menu then overwrite it in the map (or whever you want to place it).
	</p>

	<!-- <h3>Can I add new buildings with the editor?</h3>
No. The option was disabled since it lead to some glitches at a later point.
It's better to let the game do it by itself. Just add any new PWP (street lamp, for example) in-game with Isabelle, pay it, then wait for the next day so you can edit it in the editor. -->

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		How can I move a building?
	</h3>

	<p>There are two ways to move a building:</p>

	<ul class={['list-disc', 'list-outside', 'ml-8']}>
		<li>
			Mouse over the map, the cursor will turn into a hand if the existing building in the spot can
			be moved. Click and hold, and move it to the desired location.
		</li>
		<li>
			Buildings can also be moved manually by changing their coordinates in the building list, this
			allows to place buildings outside the playable area (the dock must be there). Additionally,
			you can press cursor keys in the keyboard instead of typing the numeric coordinates.
		</li>
	</ul>

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		How can I add special characters to my name?
	</h3>
	Choose a special character here:
	<Select.Root type="single" bind:value={charCode}>
		<Select.Trigger class={['inline-flex', 'w-full', 'max-w-48']}>
			<Select.Value>Select...</Select.Value>
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Nintendo DS</Select.Label>
				<Select.Item value="57344" label="A Button">A Button</Select.Item>
				<Select.Item value="57345" label="B Button">B Button</Select.Item>
				<Select.Item value="57346" label="X Button">X Button</Select.Item>
				<Select.Item value="57347" label="Y Button">Y Button</Select.Item>
				<Select.Item value="57348" label="L Button">L Button</Select.Item>
				<Select.Item value="57349" label="R Button">R Button</Select.Item>
				<Select.Item value="57350" label="D-pad">D-pad</Select.Item>
				<Select.Item value="57364" label="DS Touch Screen Calibration">
					DS Touch Screen Calibration
				</Select.Item>
			</Select.Group>
			<Select.Group>
				<Select.Label>Nintendo DSi</Select.Label>
				<Select.Item value="57373" label="DSi/3DS Touch Screen Calibration">
					DSi/3DS Touch Screen Calibration
				</Select.Item>
				<Select.Item value="57374" label="Camera Icon">Camera Icon</Select.Item>
			</Select.Group>
			<Select.Group>
				<Select.Label>Nintendo 3DS</Select.Label>
				<Select.Item value="57465" label="D-pad Up">D-pad Up</Select.Item>
				<Select.Item value="57466" label="D-pad Down">D-pad Down</Select.Item>
				<Select.Item value="57467" label="D-pad Left">D-pad Left</Select.Item>
				<Select.Item value="57468" label="D-pad Right">D-pad Right</Select.Item>
				<Select.Item value="57469" label="D-pad Up & Down">D-pad Up & Down</Select.Item>
				<Select.Item value="57470" label="D-pad Left & Right">D-pad Left & Right</Select.Item>
				<Select.Item value="57464" label="Power Button">Power Button</Select.Item>
				<Select.Item value="57462" label="Video Icon">Video Icon</Select.Item>
				<Select.Item value="57458" label="Turning Arrow">Turning Arrow</Select.Item>
				<Select.Item value="57459" label="HOME Menu">HOME Menu</Select.Item>
				<Select.Item value="57460" label="Pedometer">Pedometer</Select.Item>
				<Select.Item value="57461" label="Play Coin">Play Coin</Select.Item>
				<Select.Item value="57457" label="Close Button">Close Button</Select.Item>
				<Select.Item value="57456" label="Close Button">Close Button</Select.Item>
			</Select.Group>
			<Select.Group>
				<Select.Label>PictoChat</Select.Label>
				<Select.Item value="57352" label="Happy Face">Happy Face</Select.Item>
				<Select.Item value="57353" label="Angry Face">Angry Face</Select.Item>
				<Select.Item value="57354" label="Sad Face">Sad Face</Select.Item>
				<Select.Item value="57355" label="Sleepy Face">Sleepy Face</Select.Item>
				<Select.Item value="57356" label="Sun">Sun</Select.Item>
				<Select.Item value="57357" label="Cloud">Cloud</Select.Item>
				<Select.Item value="57358" label="Umbrella">Umbrella</Select.Item>
				<Select.Item value="57359" label="Snowman">Snowman</Select.Item>
				<Select.Item value="57360" label="Black Box with !">Black Box with !</Select.Item>
				<Select.Item value="57361" label="Black Box with ?">Black Box with ?</Select.Item>
				<Select.Item value="57362" label="Envelope">Envelope</Select.Item>
				<Select.Item value="57363" label="Cellphone">Cellphone</Select.Item>
				<Select.Item value="57351" label="Clock">Clock</Select.Item>
				<Select.Item value="57365" label="Spade">Spade</Select.Item>
				<Select.Item value="57366" label="Diamond">Diamond</Select.Item>
				<Select.Item value="57367" label="Heart">Heart</Select.Item>
				<Select.Item value="57368" label="Clubs">Clubs</Select.Item>
				<Select.Item value="57369" label="Right Arrow">Right Arrow</Select.Item>
				<Select.Item value="57370" label="Left Arrow">Left Arrow</Select.Item>
				<Select.Item value="57371" label="Up Arrow">Up Arrow</Select.Item>
				<Select.Item value="57372" label="Down Arrow">Down Arrow</Select.Item>
				<Select.Item value="57375" label="Box with X inside">Box with X inside</Select.Item>
				<Select.Item value="57376" label="Loading Squares 1">Loading Squares 1</Select.Item>
				<Select.Item value="57377" label="Loading Squares 2">Loading Squares 2</Select.Item>
				<Select.Item value="57378" label="Loading Squares 3">Loading Squares 3</Select.Item>
				<Select.Item value="57379" label="Loading Squares 4">Loading Squares 4</Select.Item>
				<Select.Item value="57380" label="Loading Squares 5">Loading Squares 5</Select.Item>
				<Select.Item value="57381" label="Loading Squares 6">Loading Squares 6</Select.Item>
				<Select.Item value="57382" label="Loading Squares 7">Loading Squares 7</Select.Item>
				<Select.Item value="57383" label="Loading Squares 8">Loading Squares 8</Select.Item>
				<Select.Item value="57384" label="Big X">Big X</Select.Item>
				<Select.Item value="57385" label="Chat Room A">Chat Room A</Select.Item>
				<Select.Item value="57386" label="Chat Room B">Chat Room B</Select.Item>
				<Select.Item value="57387" label="Chat Room C">Chat Room C</Select.Item>
				<Select.Item value="57388" label="Chat Room D">Chat Room D</Select.Item>
				<Select.Item value="57389" label="A in Black Background">A in Black Background</Select.Item>
				<Select.Item value="57390" label="M in Black Background">M in Black Background</Select.Item>
				<Select.Item value="57392" label="P in PictoChat Logo">P in PictoChat Logo</Select.Item>
				<Select.Item value="57393" label="I in PictoChat Logo">I in PictoChat Logo</Select.Item>
				<Select.Item value="57394" label="C in PictoChat Logo">C in PictoChat Logo</Select.Item>
				<Select.Item value="57395" label="T in PictoChat Logo">T in PictoChat Logo</Select.Item>
				<Select.Item value="57396" label="H in PictoChat Logo">H in PictoChat Logo</Select.Item>
				<Select.Item value="57397" label="A in PictoChat Logo">A in PictoChat Logo</Select.Item>
				<Select.Item value="57406" label="Small X in Black Background">
					Small X in Black Background
				</Select.Item>
				<Select.Item value="57407" label="Large X in Black Background">
					Large X in Black Background
				</Select.Item>
			</Select.Group>
			<Select.Group>
				<Select.Label>Nintendo Wii</Select.Label>
				<Select.Item value="57447" label="Wii Logo">Wii Logo</Select.Item>
				<Select.Item value="57410" label="Wii Remote A Button">Wii Remote A Button</Select.Item>
				<Select.Item value="57411" label="Wii Remote B Button">Wii Remote B Button</Select.Item>
				<Select.Item value="57409" label="D-pad">D-pad</Select.Item>
				<Select.Item value="57412" label="Home Button">Home Button</Select.Item>
				<Select.Item value="57413" label="+ Button">+ Button</Select.Item>
				<Select.Item value="57414" label="- Button">- Button</Select.Item>
				<Select.Item value="57415" label="1 Button">1 Button</Select.Item>
				<Select.Item value="57416" label="2 Button">2 Button</Select.Item>
				<Select.Item value="57408" label="Power Button">Power Button</Select.Item>
				<Select.Item value="57417" label="Analog Stick">Analog Stick</Select.Item>
				<Select.Item value="57418" label="Nunchuk C Button">Nunchuk C Button</Select.Item>
				<Select.Item value="57419" label="Nunchuk Z Button">Nunchuk Z Button</Select.Item>
				<Select.Item value="57424" label="Left Analog Stick">Left Analog Stick</Select.Item>
				<Select.Item value="57425" label="Right Analog Stick">Right Analog Stick</Select.Item>
				<Select.Item value="57420" label="Classic Controller A Button">
					Classic Controller A Button
				</Select.Item>
				<Select.Item value="57421" label="Classic Controller B Button">
					Classic Controller B Button
				</Select.Item>
				<Select.Item value="57422" label="Classic Controller X Button">
					Classic Controller X Button
				</Select.Item>
				<Select.Item value="57423" label="Classic Controller Y Button">
					Classic Controller Y Button
				</Select.Item>
				<Select.Item value="57426" label="Classic Controller L Button">
					Classic Controller L Button
				</Select.Item>
				<Select.Item value="57427" label="Classic Controller R Button">
					Classic Controller R Button
				</Select.Item>
				<Select.Item value="57428" label="Classic Controller ZL Button">
					Classic Controller ZL Button
				</Select.Item>
				<Select.Item value="57429" label="Classic Controller ZR Button">
					Classic Controller ZR Button
				</Select.Item>
				<Select.Item value="57430" label="Enter Key">Enter Key</Select.Item>
				<Select.Item value="57431" label="Space Key">Space Key</Select.Item>
				<Select.Item value="57432" label="Wii Remote Pointer">Wii Remote Pointer</Select.Item>
				<Select.Item value="57433" label="Wii Remote Pointer 1">Wii Remote Pointer 1</Select.Item>
				<Select.Item value="57434" label="Wii Remote Pointer 2">Wii Remote Pointer 2</Select.Item>
				<Select.Item value="57435" label="Wii Remote Pointer 3">Wii Remote Pointer 3</Select.Item>
				<Select.Item value="57436" label="Wii Remote Pointer 4">Wii Remote Pointer 4</Select.Item>
				<Select.Item value="57437" label="Wii Remote Pointer Grabbing">
					Wii Remote Pointer Grabbing
				</Select.Item>
				<Select.Item value="57438" label="Wii Remote Pointer Grabbing 1"
					>Wii Remote Pointer Grabbing 1
				</Select.Item>
				<Select.Item value="57439" label="Wii Remote Pointer Grabbing 2">
					Wii Remote Pointer Grabbing 2
				</Select.Item>
				<Select.Item value="57440" label="Wii Remote Pointer Grabbing 3">
					Wii Remote Pointer Grabbing 3
				</Select.Item>
				<Select.Item value="57441" label="Wii Remote Pointer Grabbing 4">
					Wii Remote Pointer Grabbing 4
				</Select.Item>
				<Select.Item value="57442" label="Wii Remote Pointer Open">
					Wii Remote Pointer Open
				</Select.Item>
				<Select.Item value="57443" label="Wii Remote Pointer Open 1">
					Wii Remote Pointer Open 1
				</Select.Item>
				<Select.Item value="57444" label="Wii Remote Pointer Open 2">
					Wii Remote Pointer Open 2
				</Select.Item>
				<Select.Item value="57445" label="Wii Remote Pointer Open 3">
					Wii Remote Pointer Open 3
				</Select.Item>
				<Select.Item value="57446" label="Wii Remote Pointer Open 4">
					Wii Remote Pointer Open 4
				</Select.Item>
				<Select.Item value="57451" label="? in Black Background">? in Black Background</Select.Item>
				<Select.Item value="57448" label="Superscript er">Superscript er</Select.Item>
			</Select.Group>
			<Select.Group>
				<Select.Label>Extra</Select.Label>
				<Select.Item value="9728" label="Sun">Sun</Select.Item>
				<Select.Item value="9729" label="Cloud">Cloud</Select.Item>
				<Select.Item value="9730" label="Umbrella">Umbrella</Select.Item>
				<Select.Item value="9731" label="Snowman">Snowman</Select.Item>
				<Select.Item value="9742" label="Telephone">Telephone</Select.Item>
				<Select.Item value="9756" label="Hand Left">Hand Left</Select.Item>
				<Select.Item value="9757" label="Hand Up">Hand Up</Select.Item>
				<Select.Item value="9758" label="Hand Right">Hand Right</Select.Item>
				<Select.Item value="9759" label="Hand Down">Hand Down</Select.Item>
				<Select.Item value="9824" label="Spade">Spade</Select.Item>
				<Select.Item value="9829" label="Heart">Heart</Select.Item>
				<Select.Item value="9827" label="Clubs">Clubs</Select.Item>
				<Select.Item value="9830" label="Diamond">Diamond</Select.Item>
				<Select.Item value="9828" label="White Spade">White Spade</Select.Item>
				<Select.Item value="9825" label="White Heart">White Heart</Select.Item>
				<Select.Item value="9831" label="White Clubs">White Clubs</Select.Item>
				<Select.Item value="9826" label="White Diamond">White Diamond</Select.Item>
				<Select.Item value="9743" label="White Telephone">White Telephone</Select.Item>
				<Select.Item value="10004" label="Tick">Tick</Select.Item>
				<Select.Item value="8481" label="TEL">TEL</Select.Item>
			</Select.Group>
		</Select.Content>
	</Select.Root>
	and it will be copied to the clipboard<br />Then paste it in the desired field.

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		I've injected Holden/Filly RVs, but they do not ask me to come to the town.
	</h3>
	Both Holden and Filly are RV locked, so they cannot come to your town as villagers legally.<br />
	The only way to have Holden/Filly as villagers is to inject them directly into your town into an existing
	villager.

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Your editor glitched my savegame!
	</h3>
	No. It wasn't my editor, it was you.<br />
	The editor can do cool things, but it's also a dangerous tool and you are the only responsible while
	using it. Keep always a backup of your previous savegame.<br />
	If you think you've found a bug, post your feedback
	{@render link('here', 'https://gbatemp.net/threads/animal-crossing-new-leaf-save-editor.382965')}.

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Can I create building seeds like Wild World?
	</h3>
	No.

	<h3
		id="warnings"
		class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}
	>
		What can I do to ensure my savegame does not get glitched?
	</h3>
	<ul class={['list-disc', 'list-outside', 'ml-8']}>
		<li>
			<b>there must be at least a pond, </b>
		</li>

		<li>
			<b>there must be two waterfalls (wall and sea), </b>
		</li>

		<li>
			<b>there must be a town plaza acre, </b>
		</li>

		<li>
			<b>there must be two slopes: </b> you can move them carefully using the acre editor
		</li>

		<li>
			<b>do not do weird things with the acre editor: </b> try to keep a valid acre structure
		</li>

		<li>
			<b>keep at least two rocks: </b> move them using the map editor if you need it
			<small
				>(use right click to 'copy' the rock, place it anywhere then delete the original one)</small
			>
		</li>

		<li>
			<b>keep enough free space for buildings in the town plaza acre: </b> the game will freeze whenever
			special visitors (Redd, Gracie, Katrina...) try to put their tents there and there is not enough
			space
		</li>

		<li>
			<b>be careful when moving any building: </b> you can adjust building placements with the editor,
			but don't do weird things like placing houses in the water
		</li>
	</ul>

	<h3 class={['text-amber-600 dark:text-amber-500', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		The game says my savegame data is corrupted. What happened? Can I restore my savegame?
	</h3>
	That means you injected an old savegame, and the game blocked it using an anti-cheat protection system.<br
	/> <br />

	Do not worry, you can still restore it. You will need to update its secure NAND value.
	<ol class={['list-decimal', 'list-outside', 'ml-8']}>
		<li><b>Make a backup of your old savegame you want to restore</b></li>
		<li>Restart your game and save. Make a dump of this new AC:NL savegame.</li>
		<li>Open the <b>old</b> garden.dat/garden_plus.dat savegame in the editor</li>
		<li>
			Go to the Other tab, click on the pencil next to Secure Value and load the <b>newest</b>
			garden.dat/garden_plus.dat here.<br />
			That will turn your old savegame into a valid savegame for the console.
		</li>
	</ol>
	<!-- Alternatively you can use <span class="app-icon purple"> </span> svdt which updates the NAND value for you. -->
</article>
