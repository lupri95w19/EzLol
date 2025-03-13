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
			<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">Crafting</h1>
			<p class="text-2xl mb-6 text-[#000000]">
				Quando parliamo di crafting su LoL, parliamo di Capsule Campione, Skin,
				Skin per lumi, Gettoni maestria per i campioni, Eterni, Icone, Emoticon
				ed Essenza Mitica ottenibili in modo gratuito, ma ottenibili anche
				pagando.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				A volte per il crafting, sarà necessario anche usare l’Essenza
				Arancione, ottenibile andando a scartare i frammenti di skin che abbiamo
				ottenuto, oppure l’Essenza Blu, ottenibile scartando i frammenti
				campione.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				Possiamo trovare tutte queste cose all’interno di Forzieri, Capsule
				campioni, Ricompense di fine stagione, Regali, Ricompense delle Clash
				Ricompense pass e le Capsule Prime Gaming.
			</p>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Forzieri Hextech
			</h2>
			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<p class="text-2xl mb-6 text-[#000000]">
						Per aprire i Forzieri Hextech, è necessaria almeno una Chiave, le
						chiavi si possono ottenere Comprandole, oppure ottenendo 3 Frammenti
						di Chiave, questi ultimi vengono dati dal gioco grazie gli onori
						ricevuti.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						All’interno dei forzieri possiamo trovare: Frammenti di campioni,
						Frammenti di Skin (incluse quelle per i lumi), Eterni, Icone,
						Emoticon ed Essenza mitica.
					</p>
				</div>
				<div
					class="col-span-6 flex justify-center items-center h-full h-[254px]"
				>
					<img
						class="h-full max-h-full object-contain rounded-lg"
						src="/Cattura11.jpg"
						alt=""
					/>
				</div>
			</div>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Capsule campione
			</h2>
			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<p class="text-2xl mb-6 text-[#000000]">
						Le capsule campione vengono rilasciate ad ogni aumento di livello,
						infatti a fine partita otterremo punti esperienza.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						Ogni 10 livelli otterremo una Capsula Campione Glorioso che conterrà
						più campioni, e inoltre, che valgono di più.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						All'interno inoltre potremmo trovare Essenza Mitica al suo interno,
						e ad ogni Capsula Campione Glorioso, troveremo l’emote specifica del
						livello.
					</p>
				</div>
				<div class="col-span-6 flex justify-center items-center h-[254px]">
					<img
						class="h-full max-h-full object-contain rounded-lg"
						src="/Cattura12.jpg"
						alt=""
					/>
				</div>
			</div>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Ricompense di fine stagione
			</h2>
			<p class="text-2xl mb-6 text-[#000000]">
				Le ricompense di fine stagione comprendono vari premi, questi premi
				possono essere guardati in qualsiasi momento direttamente dal launcher,
				come viene mostrato nel video.
			</p>
			<div class="mt-8 w-1/2 m-auto">
				<a href="https://www.youtube.com/watch?v=K051iRO9Ugo">
					<div class="relative w-full pb-[56.25%]">
						<iframe
							class="absolute inset-0 w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/K051iRO9Ugo"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</a>
			</div>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Ricompense pass
			</h2>
			<p class="text-2xl mb-6 text-[#000000]">
				Quando sarà presente un pass, nella sezione delle missioni vi si
				presenteranno varie missioni, e se si dovesse comprare il pass si
				avranno più missioni e più ricompense.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">
				Le ricompense solitamente: scambi per chiavi, per campioni casuali, per
				skin casuali oppure si possono prendere delle sfere evento, che al loro
				interno conterrano una skin o una borsa, che contiene più skin.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">
				Il pass va comprato solamente se si ha tanto tempo a disposizione per
				giocare, perché per il completamento del pass, sono richieste numerose
				ore.
			</p>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Capsula Prime Gaming
			</h2>
			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<p class="text-2xl mb-6 text-[#000000]">
						Grazie alle recenti collaborazioni tra Riot Games e Amazon, ogni
						mese si può ottenere una Capsula Prime Gaming, però è necessario
						avere Amazon Prime.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						Al suo interno, attualmente, troviamo: 350 Rp, una Skin (non può
						essere doppione), 200 Essenze Arancioni, 5 Frammenti di Campioni, 2
						Frammenti Eterni, e 1 Boost PE da 30 Giorni.
					</p>
				</div>
				<div class="col-span-6 flex justify-center items-center h-[254px]">
					<img
						class="h-full max-h-full object-contain rounded-lg"
						src="/Cattura14 - Copia.jpg"
						alt=""
					/>
				</div>
			</div>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Capsula Eterni
			</h2>
			<div class="grid grid-cols-12 justify-between gap-16 mb-24">
				<div class="col-span-6">
					<p class="text-2xl mb-6 text-[#000000]">
                        Gli Eterni sono delle statistiche aggiuntive, che le persone possono guardare visualizzando il vostro profilo.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
                        All'interno della capsula si trovano 2 set Eterni, quindi eterni per due campioni.
					</p>
                    <p class="text-2xl mb-6 text-[#000000]">
                        Non ha molto senso acquistare con soldi veri queste capsule.
					</p>
				</div>
				<div class="col-span-6 flex justify-center items-center h-[254px]">
					<img
						class="h-full max-h-full object-contain rounded-lg"
						src="/Cattura15copia.jpg"
						alt=""
					/>
				</div>
			</div>
            <Section />
		</div>
		<Footer />
	</div>
</template>
