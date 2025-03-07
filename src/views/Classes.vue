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
			<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">Classi</h1>
			<p class="text-2xl mb-3 text-[#000000]">
				In League of Legends sono presenti 6 Classi, ognuna di queste classi è
				completamente diversa dalle altre e ricopre un ruolo specifico.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">Queste classi sono:</p>

			<div>
				<div class="flex gap-4 items-center mt-32 mb-4">
					<h2
						class="text-3xl font-bold text-[#000000] text-[44px] relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle flex items-center"
					>
						Assassini
					</h2>
					<img class="h-[44px] object-contain" src="/Slayer_icon.webp" alt="" />
				</div>

				<p class="text-2xl mb-3 text-[#000000]">
					Gli Assassini, sono la classe con più mobilità del gioco, loro
					infliggono ingenti danni nell’arco di pochissimo tempo.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Il loro scopo, solitamente, è quello di uccidere il giocatore più
					forte della squadra nemica.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Gli Assassini solitamente aspettano che qualcuno inizi il
					combattimento, così da potersi buttare subito dopo verso il loro
					bersaglio.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Gli Assassini vengono giocati principalmente in Mid, alcuni però è
					possibili vederli Top e anche Support (parliamo di Pyke, un Assassino
					concepito come campione di Supporto)
				</p>
			</div>

			<div>
				<div class="flex gap-4 items-center mt-32 mb-4">
					<h2
						class="text-3xl font-bold text-[#000000] text-[44px] relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle flex items-center"
					>
						Combattenti
					</h2>
					<img
						class="h-[44px] object-contain"
						src="/Fighter_icon.webp"
						alt=""
					/>
				</div>

				<p class="text-2xl mb-6 text-[#000000]">
					I Combattenti sono dei campioni che riescono a fare tanto danno, con
					Spell e Auto Attack, ma riescono a sopravvivere per un po’ sotto il
					fuoco nemico, inoltre nel loro kit è presente pure qualche mossa di
					controllo pesante.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Il loro scopo è letteralmente quello di distruggere la Front-line,
					oppure di gettarsi letteralmente sul giocatore nemico più forte.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Solitamente i Combattenti li troviamo in Top, Giungla e a volte anche
					in Mid... raramente si vedono come Support.
				</p>
			</div>

			<div>
				<div class="flex gap-4 items-center mt-32 mb-4">
					<h2
						class="text-3xl font-bold text-[#000000] text-[44px] relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle flex items-center"
					>
						Maghi
					</h2>
					<img class="h-[44px] object-contain" src="/Mage_icon.webp" alt="" />
				</div>

				<p class="text-2xl mb-6 text-[#000000]">
					I Maghi sono dei campioni che riescono a fare tantissimo danno in
					pochissimo tempo grazie alle loro Spell, e riescono anche ad applicare
					gli effetti di controllo sulla squadra nemica.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Il loro scopo è letteralmente quello di distruggere la squadra nemica,
					puntando sempre a quei campioni che potrebbero dare più fastidio a
					loro e alla loro squadra, il tutto sempre rimanendo nelle retrovie.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Solitamente i Maghi li troviamo in Mid e in Bot come Support, ma a
					volte si giocano anche Top, Giungla e raramente al posto degli
					ADC/Tiratori
				</p>
			</div>

			<div>
				<div class="flex gap-4 items-center mt-32 mb-4">
					<h2
						class="text-3xl font-bold text-[#000000] text-[44px] relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle flex items-center"
					>
						ADC/Tiratori
					</h2>
					<img
						class="h-[44px] object-contain"
						src="/Marksman_icon.webp"
						alt=""
					/>
				</div>

				<p class="text-2xl mb-6 text-[#000000]">
					Gli ADC sono dei campioni che riescono a fare tantissimo danno
					sostenuto, i cosiddetti DPS.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Il loro scopo è letteralmente quello di distruggere la squadra nemica,
					puntando sempre a quei campioni che sono più vicini a loro, e se
					possibile puntando al campione che può causare più problemi alla
					squadra.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Solitamente gli ADC, vengono usati in Bot, ma a volte è possibile
					vederli in Mid e Top... raramente come Support, mentre in Giungla
					abbiamo Kindred, un’ADC progettato come campione da Giungla.
				</p>
			</div>

			<div>
				<div class="flex gap-4 items-center mt-32 mb-4">
					<h2
						class="text-3xl font-bold text-[#000000] text-[44px] relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle flex items-center"
					>
						Supporto
					</h2>
					<img
						class="h-[44px] object-contain"
						src="/Controller_icon.webp"
						alt=""
					/>
				</div>

				<p class="text-2xl mb-6 text-[#000000]">
					I Support sono dei campioni che hanno come scopo, quello di proteggere
					i propri alleati o di favorire l’ingaggio per poter eliminare un
					campione nemico.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Il loro scopo è letteralmente quello supportare l’ADC in lane (a
					livelli alti gankano pure le altre lane quando possibile), ma una
					volta finita la fase di corsia, il suo scopo sarà quello di aiutare il
					membro della squadra più forte al momento.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					I Support devono aiutare i propri alleati, grazie a Buff o
					semplicemente grazie ad effetti di controllo.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Solitamente i Support vengono giocati in Bot, insieme agli ADC, ma è
					possibile trovare Ivern in Giungla, Ivern è un Support progettato come
					Jungler.
				</p>
			</div>

			<div>
				<div class="flex gap-4 items-center mt-32 mb-4">
					<h2
						class="text-3xl font-bold text-[#000000] text-[44px] relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle flex items-center"
					>
						Tank
					</h2>
					<img class="h-[44px] object-contain" src="/Tank_icon.webp" alt="" />
				</div>

				<p class="text-2xl mb-6 text-[#000000]">
					I Tank sono dei campioni che riescono ad assorbire i danni al posto
					della loro squadra. Il loro scopo è quello di utilizzare tantissimi
					effetti di controllo sulla squadra nemica e di “Tankare” più colpi
					possibili.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					I Tank rappresentano la classe con più HP e Resistenze del gioco,
					quindi devono dare copertura a quei campioni con meno HP e Resistenze
					ma che hanno più danni.
				</p>
				<p class="text-2xl mb-6 text-[#000000]">
					Solitamente i Tank vengono giocati in Top e Bot come Support.
				</p>
			</div>
			<Section />
		</div>

		<Footer />
	</div>
</template>
