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

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-14 mb-4">
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

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-14 mb-4">
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
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
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
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
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
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
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
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
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
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
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
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
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

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-14 mb-4">
				Campi Neutrali
			</h2>
			<div class="grid grid-cols-12 justify-between gap-16 mt-24">
				<div class="col-span-6">
					<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4">
						Argogranchio/Giorgio
					</h3>
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

			<h3 class="text-xl font-bold text-[#000000] text-[24px] mb-4 mt-24">
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


			<Section />
		</div>

		<Footer />
	</div>
</template>
