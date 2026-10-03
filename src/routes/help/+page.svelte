<script lang="ts">
	import { resolve } from '$app/paths';

	function copyToClipboard(text: string) {
		var input = document.createElement('input');
		input.value = text;

		document.body.appendChild(input);

		input.select();
		input.setSelectionRange(0, 99999); /* mobile fix */

		document.execCommand('copy');

		document.body.removeChild(input);
	}
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
	<a {href} rel="noopener noreferrer" class={['text-accent', 'underline', 'hover:no-underline']}>
		{text}
	</a>
{/snippet}

<article class={['max-w-240', 'mx-auto', 'mb-8']}>
	<hgroup
		class={[
			'flex',
			'w-full',
			'bg-accent',
			'text-accent-foreground',
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
		Please read the {@render link('Instructions', resolve('#howto'))} and the {@render link(
			'FAQ',
			resolve('#faq')
		)}
		carefully.
	</p>

	<p
		class={[
			'bg-destructive',
			'text-accent-foreground',
			'font-bold',
			'text-center',
			'p-4',
			'rounded-lg',
			'my-4'
		]}
	>
		This app can damage your savegame if not used correctly. I'm not responsible of any data lost.
		<br />
		Be careful when editing your savegame, always keep backups of your savegame.
	</p>

	<hr class={['my-8']} />

	<h2
		id="howto"
		class={['border-l-6', 'border-accent', 'text-accent', 'font-bold', 'pl-4', 'text-2xl', 'my-8']}
	>
		How to dump and inject AC:NL savegame
	</h2>
	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>Requirements</h3>
	<ul class={['list-disc', 'list-outside', 'ml-8']}>
		<li>a hacked Nintendo 3DS/XL, New Nintendo 3DS/XL, Nintendo 2DS or New Nintendo 2DS XL</li>
		<li>retail/digital version of AC:NL with or without Welcome amiibo update</li>
		<li>an updated web browser (recommended: {@render link('Firefox', 'https://firefox.com/')})</li>
	</ul>

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>Hack your 3DS</h3>

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

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>Extract savegame</h3>
	<ol class={['list-decimal', 'list-outside', 'ml-8']}>
		<li>Open <strong>Homebrew Launcher</strong></li>
		<li>Open <strong>Checkpoint</strong></li>
		<li>Choose <strong>AC:NL icon</strong> and press A</li>
		<li>Choose <strong>Backup (L)</strong> and type a name for the savegame backup</li>
		<li>Power down the console, take out the SD card and put in the PC</li>
	</ol>

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>Insert savegame</h3>
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
Alternatively you can use <span class="app-icon purple"></span> svdt which skips the anti-cheat protection for you.
-->

	<hr class={['my-8']} />

	<h2
		id="faq"
		class={['border-l-6', 'border-accent', 'text-accent', 'font-bold', 'pl-4', 'text-2xl', 'my-8']}
	>
		FAQ
	</h2>

	<!-- <h3>Will I be banned if I play online with a hacked savegame?</h3>
Yes, you might be banned from online functions if you change your TPC pic and use the Club Tortimer.<br/> -->

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		How can I rotate furniture in rooms?
	</h3>
	<p>Right click on the desired furniture then left click to rotate it.</p>

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
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

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
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

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		How can I add special characters to my name?
	</h3>
	Choose a special character here:
	<select
		id="select-unicode"
		onchange={(ev) => copyToClipboard(String.fromCharCode(parseInt(ev.currentTarget.value)))}
		onblur={(ev) => copyToClipboard(String.fromCharCode(parseInt(ev.currentTarget.value)))}
	>
		<optgroup label="Nintendo DS">
			<option value="57344">A Button</option>
			<option value="57345">B Button</option>
			<option value="57346">X Button</option>
			<option value="57347">Y Button</option>
			<option value="57348">L Button</option>
			<option value="57349">R Button</option>
			<option value="57350">D-pad</option>
			<option value="57364">DS Touch Screen Calibration</option>
		</optgroup>
		<optgroup label="Nintendo DSi">
			<option value="57373">DSi/3DS Touch Screen Calibration</option>
			<option value="57374">Camera Icon</option>
		</optgroup>
		<optgroup label="Nintendo 3DS">
			<option value="57465">D-pad Up</option>
			<option value="57466">D-pad Down</option>
			<option value="57467">D-pad Left</option>
			<option value="57468">D-pad Right</option>
			<option value="57469">D-pad Up &amp; Down</option>
			<option value="57470">D-pad Left &amp; Right</option>
			<option value="57464">Power Button</option>
			<option value="57462">Video Icon</option>
			<option value="57458">Turning Arrow</option>
			<option value="57459">HOME Menu</option>
			<option value="57460">Pedometer</option>
			<option value="57461">Play Coin</option>
			<option value="57457">Close Button</option>
			<option value="57456">Close Button</option>
		</optgroup>
		<optgroup label="PictoChat">
			<option value="57352">Happy Face</option>
			<option value="57353">Angry Face</option>
			<option value="57354">Sad Face</option>
			<option value="57355">Sleepy Face</option>
			<option value="57356">Sun</option>
			<option value="57357">Cloud</option>
			<option value="57358">Umbrella</option>
			<option value="57359">Snowman</option>
			<option value="57360">Black Box with !</option>
			<option value="57361">Black Box with ?</option>
			<option value="57362">Envelope</option>
			<option value="57363">Cellphone</option>
			<option value="57351">Clock</option>
			<option value="57365">Spade</option>
			<option value="57366">Diamond</option>
			<option value="57367">Heart</option>
			<option value="57368">Clubs</option>
			<option value="57369">Right Arrow</option>
			<option value="57370">Left Arrow</option>
			<option value="57371">Up Arrow</option>
			<option value="57372">Down Arrow</option>
			<option value="57375">Box with X inside</option>
			<option value="57376">Loading Squares 1</option>
			<option value="57377">Loading Squares 2</option>
			<option value="57378">Loading Squares 3</option>
			<option value="57379">Loading Squares 4</option>
			<option value="57380">Loading Squares 5</option>
			<option value="57381">Loading Squares 6</option>
			<option value="57382">Loading Squares 7</option>
			<option value="57383">Loading Squares 8</option>
			<option value="57384">Big X</option>
			<option value="57385">Chat Room A</option>
			<option value="57386">Chat Room B</option>
			<option value="57387">Chat Room C</option>
			<option value="57388">Chat Room D</option>
			<option value="57389">A in Black Background</option>
			<option value="57390">M in Black Background</option>
			<option value="57392">P in PictoChat Logo</option>
			<option value="57393">I in PictoChat Logo</option>
			<option value="57394">C in PictoChat Logo</option>
			<option value="57395">T in PictoChat Logo</option>
			<option value="57396">H in PictoChat Logo</option>
			<option value="57397">A in PictoChat Logo</option>
			<option value="57406">Small X in Black Background</option>
			<option value="57407">Large X in Black Background</option>
		</optgroup>
		<optgroup label="Nintendo Wii">
			<option value="57447">Wii Logo</option>
			<option value="57410">Wii Remote A Button</option>
			<option value="57411">Wii Remote B Button</option>
			<option value="57409">D-pad</option>
			<option value="57412">Home Button</option>
			<option value="57413">+ Button</option>
			<option value="57414">- Button</option>
			<option value="57415">1 Button</option>
			<option value="57416">2 Button</option>
			<option value="57408">Power Button</option>
			<option value="57417">Analog Stick</option>
			<option value="57418">Nunchuk C Button</option>
			<option value="57419">Nunchuk Z Button</option>
			<option value="57424">Left Analog Stick</option>
			<option value="57425">Right Analog Stick</option>
			<option value="57420">Classic Controller A Button</option>
			<option value="57421">Classic Controller B Button</option>
			<option value="57422">Classic Controller X Button</option>
			<option value="57423">Classic Controller Y Button</option>
			<option value="57426">Classic Controller L Button</option>
			<option value="57427">Classic Controller R Button</option>
			<option value="57428">Classic Controller ZL Button</option>
			<option value="57429">Classic Controller ZR Button</option>
			<option value="57430">Enter Key</option>
			<option value="57431">Space Key</option>
			<option value="57432">Wii Remote Pointer</option>
			<option value="57433">Wii Remote Pointer 1</option>
			<option value="57434">Wii Remote Pointer 2</option>
			<option value="57435">Wii Remote Pointer 3</option>
			<option value="57436">Wii Remote Pointer 4</option>
			<option value="57437">Wii Remote Pointer Grabbing</option>
			<option value="57438">Wii Remote Pointer Grabbing 1</option>
			<option value="57439">Wii Remote Pointer Grabbing 2</option>
			<option value="57440">Wii Remote Pointer Grabbing 3</option>
			<option value="57441">Wii Remote Pointer Grabbing 4</option>
			<option value="57442">Wii Remote Pointer Open</option>
			<option value="57443">Wii Remote Pointer Open 1</option>
			<option value="57444">Wii Remote Pointer Open 2</option>
			<option value="57445">Wii Remote Pointer Open 3</option>
			<option value="57446">Wii Remote Pointer Open 4</option>
			<option value="57451">? in Black Background</option>
			<option value="57448">Superscript er</option>
		</optgroup>
		<optgroup label="Extra">
			<option value="9728">Sun</option>
			<option value="9729">Cloud</option>
			<option value="9730">Umbrella</option>
			<option value="9731">Snowman</option>
			<option value="9742">Telephone</option>
			<option value="9756">Hand Left</option>
			<option value="9757">Hand Up</option>
			<option value="9758">Hand Right</option>
			<option value="9759">Hand Down</option>
			<option value="9824">Spade</option>
			<option value="9829">Heart</option>
			<option value="9827">Clubs</option>
			<option value="9830">Diamond</option>
			<option value="9828">White Spade</option>
			<option value="9825">White Heart</option>
			<option value="9831">White Clubs</option>
			<option value="9826">White Diamond</option>
			<option value="9743">White Telephone</option>
			<option value="10004">Tick</option>
			<option value="8481">TEL</option>
		</optgroup>
	</select>
	and it will be copied to the clipboard<br />Then paste it in the desired field.

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		I've injected Holden/Filly RVs, but they do not ask me to come to the town.
	</h3>
	Both Holden and Filly are RV locked, so they cannot come to your town as villagers legally.<br />
	The only way to have Holden/Filly as villagers is to inject them directly into your town into an existing
	villager.

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Your editor glitched my savegame!
	</h3>
	No. It wasn't my editor, it was you.<br />
	The editor can do cool things, but it's also a dangerous tool and you are the only responsible while
	using it. Keep always a backup of your previous savegame.<br />
	If you think you've found a bug, post your feedback
	{@render link('here', 'https://gbatemp.net/threads/animal-crossing-new-leaf-save-editor.382965')}.

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		Can I create building seeds like Wild World?
	</h3>
	No.

	<h3 id="warnings" class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
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

	<h3 class={['text-amber-600', 'font-semibold', 'mt-6', 'mb-2', 'text-lg']}>
		The game says my savegame data is corrupted. What happened? Can I restore my savegame?
	</h3>
	That means you injected an old savegame, and the game blocked it using an anti-cheat protection system.<br
	/><br />

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
	<!-- Alternatively you can use <span class="app-icon purple"></span> svdt which updates the NAND value for you. -->
</article>
