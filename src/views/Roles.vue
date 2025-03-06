<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";

export default {
	components: { Header, Footer, Section },
};
</script>

<template>
	<Header />
	<div class="bg-[#949E9D]">
		<div class="max-w-screen-lg mx-auto py-8">
			<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">Ruoli</h1>
			<p class="text-2xl mb-6 text-[#000000]">
				In League of Legends sono presenti 4 ruoli, la Top lane, la Giungla, la
				Mid lane e la Bot lane
			</p>
			<div class="flex justify-center items-center mt-4">
				<img src="/Landa.jpg" class="rounded-xl w-1/2" alt="Rift" />
			</div>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Top lane
			</h2>
			<p class="text-2xl mb-6 text-[#000000]">
				La Top lane è la corsia in alto, solitamente in Top si ha la presenza di
				un Campione con molta vita e molte resistenze.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">
				In questa corsia vengono utilizzati principalmente campioni corpo a
				corpo, specialmente Tank, Combattenti e Schermagliatori che danno molto
				fastidio a coloro che sono corpo a corpo.
			</p>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Giungla
			</h2>
			<p class="text-2xl mb-6 text-[#000000]">
				Il suo ruolo è quello di ottenere gold in giungla e aiutare i suoi
				compagni di squadra nelle varie corsie, è inoltre uno dei ruoli più
				importanti del gioco.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				I campioni usati in Jungle sono i Combattenti, alcuni Assassini, 1
				Incantatore e 1 Tiratore, Ivern e Kindred rispettivamente.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				Lui sarà l’unico utilizzatore della “Punizione”, ovvero l’incantesimo
				evocatore fatto per i Jungler.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				In giungla si trovano vari campi, alcuni neutrali e altri invece che
				appartengono ad un team, ma che possono essere invasi.
			</p>

			<div class="flex justify-center items-center mt-4 mb-24">
				<img src="/ACUadgE.jpg" class="rounded-xl w-1/2" alt="Rift" />
			</div>

			<!-- Buffs -->
			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle">
						Blu (buff)
					</h3>
					<p class="text-2xl text-[#000000] mb-6">
						Il Guardiano di quarzo è questo "golem", che viene comunemente
						chiamato dalla community “Blu”.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All'uccisione darà gold, un bonus alla ricarica delle abilità e un
						alto regen del mana.
					</p>
				</div>
				<div class="col-span-6 h-full">
					<img
						src="/Blue_Buff_29.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="Blue"
					/>
				</div>
			</div>

			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle">
						Red (buff)
					</h3>
					<p class="text-2xl text-[#000000] mb-6">
						Il Rovobestia cremisi è qeusta "Bestia", che viene comunemente
						chiamato dalla community “Rosso”.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All'uccisione darà gold, un bonus sugli autoattack che rallenteranno
						e faranno danno puro; inoltre fuori dal combattimento aumenterà il
						regen di vita.
					</p>
				</div>

				<div class="col-span-6 h-full">
					<img
						src="/Red_Buff_29_Image.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="Red"
					/>
				</div>
			</div>

			<!-- Lamabecchi e lupi -->
			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6 h-full">
					<img
						src="/raptors-full.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="Raptors"
					/>
				</div>
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle">
						Lamabecchi
					</h3>
					<p class="text-2xl text-[#000000] mb-6">
						I Lamabecchi sono 6 uccelli, 1 grosso e 5 piccolini.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All’uccisione daranno gold ed exp.
					</p>
				</div>
			</div>

			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6 h-full">
					<img
						src="/wolves-full.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="Wolves"
					/>
				</div>
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle">
						Luposcuri
					</h3>
					<p class="text-2xl text-[#000000] mb-6">
						I Luposcuri sono un gruppo di 3 lupi, 1 grande e 2 piccoli.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All’uccisione daranno gold ed exp.
					</p>
				</div>
			</div>

			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle">
						Gromp
					</h3>
					<p class="text-2xl text-[#000000] mb-6">
						Il Gromp è un grosso rospone.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All’uccisione darà un po’ di mana e di salute, e ovviamente gold ed
						exp.
					</p>
				</div>

				<div class="col-span-6 h-full">
					<img
						src="/gromp-full.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="Gromp"
					/>
				</div>
			</div>

			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle">
						Krug
					</h3>
					<p class="text-2xl text-[#000000] mb-6">
						I Krug sono dei golem di pietra.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All’uccisione si divideranno in pezzi sempre più piccoli. È il campo
						che da più exp e gold.
					</p>
				</div>

				<div class="col-span-6 h-full">
					<img
						src="/krugs-full.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>
			</div>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Campi Neutrali
			</h2>
			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Argogranchio/Giorgio
			</h3>
			<div class="grid grid-cols-12 justify-between gap-16 mt-4">
				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Chiamato anche “Giorgio” dalla community italiana, lo si può trovare
						sia sul fiume TOP-MID, che sul fiume MID-BOT.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						All'uccisione darà exp, gold e visione sul centro del fiume,
						coprendo gli altri obiettivi neutrali.
					</p>
				</div>

				<div class="col-span-6 h-full">
					<img
						src="/Granchio-Rift-Scuttler.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Draghi
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				I Draghi rappresentano alcuni degli obiettivi da fare nella Landa, ed
				appaiono tutti nella Fossa del Drago situata sul fiume MID/BOT.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				Esistono diversi tipi di Draghi ovvero Drago Infernale, dell’Oceano,
				della Nuvola, della Montagna, Hextech e il Drago Anziano. Uccidere più
				draghi farà accumulare i bonus ricevuti fino ad arrivare ad ottenre
				l'anima.
			</p>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Drago Infernale
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Drago Infernale all’uccisione darà un bonus in % di AD e AP ad ogni
				campione della Squadra.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Se si dovesse ottenere l’Anima del Drago Infernale, ogni Attacco
						base o Abilità, innescheranno un’esplosione che causerà danni bonus.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questro effetto può essere usato solamente ogni 3 secondi.
					</p>
				</div>

				<div class="col-span-6 h-full">
					<img
						src="/infernal_pit.0.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Drago dell’Oceano
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Drago dell’Oceano all’uccisione darà un regen di vita % della salute
				mancante nell’arco di 5 secondi.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Se si dovesse ottenere l’Anima del Drago dell’Oceano, non appena
						farete danno ad un nemico, si verrà curati e si ripristinerà un po’
						di mana.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questo effetto non ha secondi di ricarica, ma sui Minion e Mostri
						avrà un'effienceza del 30%.
					</p>
				</div>

				<div class="col-span-6 h-full">
					<img
						src="/ocean_pit.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Drago della Nuvola
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Drago della Nuvola all’uccisione darà un bonus % di resistenza ai
				rallentamenti, e nel caso ci si trovi fuori dai combattimenti anche 3,5%
				di velocità di movimento bonus.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6 h-full overflow-hidden rounded">
					<img
						src="/005cb-16350569721586-1920.webp"
						class="rounded-lg h-full w-full object-cover scale-105"
						alt="krugs"
					/>
				</div>
				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Se si dovesse ottenere l’Anima del Drago della Nuvola, ogni volta
						che attiverete la vostra Suprema, otterrete il 10% di velocità di
						movimento bonus che arriverà fino al 60% nell’arco di 6 secondi.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questo effetto ha una ricarica di 30 secondi (pochi campioni vengono
						colpiti da questa ricarica).
					</p>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Drago della Montagna
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Drago della Montagna all’uccisione darà un bonus % dell’Armatura e
				della Resistenza Magica.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6 h-full">
					<img
						src="/mountain_pit.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>

				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Se si dovesse ottenere l’Anima del Drago della Montagna, otterrete
						uno scudo permanente fino alla distruzione.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questo effetto ha una ricarica di 5 secondi, durante i quali non si
						deve prendere danno
					</p>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Drago Hextech
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Drago Hextech all’uccisione darà un bonus di velocità abilità e di
				velocità d’attacco.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6 h-full">
					<img
						src="/o1634655054687381.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>

				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Se si dovesse ottenere l’Anima del Drago Hextech, il prossimo
						attacco scatenererà una raffica di fulmini che faranno danno e
						rallenteranno il bersaglio, e altri 3 vicini a lui.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questo effetto ha una ricarica di 8 secondi.
					</p>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Drago Anziano
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Drago Anziano è un potentissimo Drago, che apparirà solamente dopo
				che una squadra avrà ottenuto l’Anima di un Drago, e riapparirà ogni 5
				Minuti dopo l’uccisione.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6 h-full">
					<img
						src="/b2ap3_amp_dragon-elder.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>

				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Questo Drago darà un Buff molto potente, che permette di infliggere
						danni puri ai campioni, e di Giustiziare i campioni colpiti dai
						portatori del buff, che hanno una vita inferiore al 20% della
						propria salute massima.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questo buff dura 150 Secondi
					</p>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Rift Herald
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Messaggero appare al minuto 8 nella Fossa del Messaggero/Barone
				situato sul Fiume TOP/MID.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">
				Il suo punto debole è l’enorme occhio dietro che si aprirà ogni pochi
				secondi.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6 h-full">
					<img
						src="/Herald-wild-rfit.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>

				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Una volta ucciso il Messaggero darà 100 Gold e lascerà a terra
						l’Occhio del Messaggero, e una volta raccolto sarà possibile
						evocarlo, lui andrà alla ricerca della torre più vicina, e la
						caricherà facendo ingenti danni; inoltre il proprietario avrà il
						Richiamo potenziato.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Può apparire fino a 2 volte.
					</p>
				</div>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Barone Nashor
			</h3>

			<p class="text-2xl mb-6 text-[#000000]">
				Il Barone Nashor è il mostro più forte della Landa, appare dopo il
				minuto 20:00 nella stessa posizione del Messaggero, quindi al Fosso del
				Messaggero/Barone.
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-6">
				<div class="col-span-6 h-full">
					<img
						src="/Baron_Nashor_VU.jpg"
						class="rounded-lg h-full w-full object-cover"
						alt="krugs"
					/>
				</div>

				<div class="col-span-6">
					<p class="text-2xl text-[#000000] mb-6">
						Una volta ucciso darà 300 Gold a tutta la squadra e 25 in più a chi
						lo ucciderà, inoltre darà pure il suo Buff, che darà AD e AP,
						Richiamo per la Base potenziato, e un buff enorme ai nostri Minion;
						per 3 minuti o fino alla morte (questo buff può ribaltare le sorti
						della partita)
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Questo buff dura per 180 secondi.
					</p>
				</div>
			</div>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Mid lane
			</h2>

			<p class="text-2xl mb-6 text-[#000000]">
				La mid lane si trova al centro della Landa degli Evocatori e grazie alla
				sua posizione, è possibile effettuare diverse rotazioni per aiutare i
				propri compagni di squadra.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				In questa corsia si giocano sia campioni corpo a corpo che a distanza, i
				principali campioni che si giocano sono i Maghi e gli Assassini, ma a
				volte si trovano anche alcuni Tiratori.
			</p>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Bot lane
			</h2>

			<p class="text-2xl mb-6 text-[#000000]">
				La Bot lane si trova in basso, ed è l’unica corsia nella quale si gioca
				in 2 giocatori per squadra.<br />
				Insieme alla Giungla, rappresentano le Lane “più importanti”, infatti
				saranno quelle più propense a far vincere la partita, almeno ad elo
				alti.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				In Bot lane si usano vari campioni e si suddividono in ADC, e Support,
				gli ADC solitamente sono Tiratori, ovvero la classe principale della Bot
				lane, ma volte i Maghi prendono il loro posto, dipende dal META
			</p>

			<div class="grid grid-cols-12 justify-between gap-16 mt-24">
				<div class="col-span-6">
					<div class="flex items-center gap-4">
						<h3
							class="relative text-xl font-bold text-[#000000] text-[24px] before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:align-middle before:mr-2"
						>
							ADC
						</h3>
						<img
							src="/Ignite_HD.webp"
							class="h-full w-auto max-h-12 object-contain"
							alt="Ignite"
						/>
					</div>

					<p class="text-2xl text-[#000000] mb-6">
						Il ruolo dell’ADC è quello di stare nelle retrovie e causare ingenti
						danni.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						La sua classe è quella che fa più danno, ma è anche quella meno
						resistente, e quindi sarà necessario avere un ottimo posizionamento,
						altrimenti morirà subito.
					</p>
				</div>

				<div class="col-span-6">
					<div class="flex items-center gap-4">
						<h3
							class="relative text-xl font-bold text-[#000000] text-[24px] before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:align-middle before:mr-2"
						>
							Support
						</h3>
						<img
							src="/Exhaust_HD.webp"
							class="h-full w-auto max-h-12 object-contain"
							alt="Exhaust"
						/>
					</div>

					<p class="text-2xl text-[#000000] mb-6">
						Il ruolo del Support è quello di “Supportare” l’ADC in lane.
					</p>
					<p class="text-2xl text-[#000000] mb-6">
						Una volta usciti dalla Lane, il Support dovrà andare a supportare i
						giocatori più forti al momento (non sempre sarà l’ADC, ma dipenderà
						dai campioni e dai giocatori).
					</p>
				</div>
			</div>

			<Section />
		</div>

		<Footer />
	</div>
</template>
