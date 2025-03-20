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
			<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">
				Programmi e siti utili
			</h1>
			<p class="text-2xl mb-6 text-[#000000]">
				Esistono moltissimi siti e programmi che rendono le partite molto più
				semplici.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				Ovviamente non parlo di aiuti considerabili trucchi, ma parlo di siti
				che permettono di avere delle informazioni sui nostri compagni di
				squadra e sui nemici.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">Alcuni di questi siti sono:</p>

			<a href="https://www.op.gg/">
				<h2
					class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
				>
					Op.gg
				</h2></a
			>
			<p class="text-2xl mb-6 text-[#000000]">
				Op.gg permette di sapere molto sui giocatori in partita con noi, ci
				permette di vedere per esempio il livello, il rank, le loro partite
				recenti, vedere il win rate, le persone con le quali giocano di più, i
				campioni con i quali sono più forti e molto altro ancora.
			</p>

			<div class="mt-8 w-1/2 m-auto">
				<a href="https://www.youtube.com/watch?v=PS2JwKcfqL8">
					<div class="relative w-full pb-[56.25%]">
						<iframe
							class="absolute inset-0 w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/ZslYxDQZ1G0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</a>
			</div>

			<a href="https://www.op.gg/">
				<h2
					class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
				>
					Porofessor
				</h2></a
			>
			<p class="text-2xl mb-6 text-[#000000]">
				Porofessor.gg permette di sapere molto sui giocatori ma molto più
				semplicemente rispetto ad op.gg, infatti qui possiamo vedere se i
				giocatori sono bravi a lasthittare oppure a sopravvivere ai gank oppure
				se sono scarsi.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">
				Per utilizzare le sue funzioni è semplice, basta scrivere il nome
				dell’utente che volete e il gioco è fatto, si può fare anche in champ
				select, selezionando la chat come viene scritto sul sito.
			</p>

			<div class="mt-8 w-1/2 m-auto">
				<a href="https://www.youtube.com/watch?v=4BSzj5XdR98">
					<div class="relative w-full pb-[56.25%]">
						<iframe
							class="absolute inset-0 w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/4BSzj5XdR98"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</a>
			</div>

			<a href="https://www.op.gg/">
				<h2
					class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
				>
					Blitz
				</h2></a
			>
			<p class="text-2xl mb-6 text-[#000000]">
				Blitz è un’app che svolge varie funzioni, per esempio può dirci varie
				statistiche sui campioni e sui ruoli in cui giocano, per esempio win
				rate e pick rate. Ci permette pure di dire con quali build hanno più win
				rate o comunque quali sono le build più usate.
			</p>
			<p class="text-2xl mb-6 text-[#000000]">
				Abilitando l’overlay in game può darci ancora ulteriori consigli, per
				esempio quanti minion dovremmo avere al nostro minuto, ovviamente
				selezionando un rank come riferimento, oppure sapere dove mettere le
				ward ma anche molto altro.
			</p>

			<div class="mt-8 w-1/2 m-auto">
				<a href="https://www.youtube.com/watch?v=JudE-gFsm2U">
					<div class="relative w-full pb-[56.25%]">
						<iframe
							class="absolute inset-0 w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/JudE-gFsm2U"
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
				Twitch/Youtube
			</h2>

			<p class="text-2xl mb-6 text-[#000000]">
				Twitch e Youtube sono dei siti dove si può vedere altri giocare, e
				quindi si può vedere giocatori forti giocare, e imparare cose nuove, o
				magari chiedere consigli in chat o nei commenti.
			</p>

			<p class="text-2xl mb-6 text-[#000000]">
				Inoltre nel caso si volesse imparare a giocare un campione o un ruolo
				specifico, è possibile chiedere un coaching a questi giocatori,
				ovviamente però questi coaching richiedono un pagamento la maggior parte
				delle volte, ma potrebbero aiutare molto.
			</p>

			<p class="text-2xl mb-3 text-[#000000]">
				Detto questo, i vari streamer/canali che consiglio sono:
			</p>
			<ul class="mb-6 text-black text-2xl">
				<li class="mb-6 list-disc ml-16">
					<a
						class="hover:text-red-500 transition-all duration-300 ease-in-out font-bold"
						href="https://www.twitch.tv/paoloidolo"
						>Paolo Cannone</a
					>
					<span>un giocatore che è tra i support più forti al mondo.</span>
				</li>

				<li class="mb-6 list-disc ml-16">
					<a
						class="hover:text-red-500 transition-all duration-300 ease-in-out font-bold"
						href="https://www.twitch.tv/terenas"
						>Terenas</a
					>
					<span
						>un ottimo top laner, ha molta esperienza, è anche uno dei caster
						italiani, dei tornei di LoL, inoltre da tenere in considerazione il
						fatto che su youtube mette numerosi video di LoL, per esempio Patch
						Notes, oppure i video dei nuovi campioni e spiega il loro
						funzionamento.</span
					>
				</li>

				<li class="mb-6 list-disc ml-16">
					<a
						class="hover:text-red-500 transition-all duration-300 ease-in-out font-bold"
						href="https://www.twitch.tv/kyrenis"
						>Kyrenis</a
					>
					<span
						>se vi volete fare qualche risata, infatti consigliamo di guardare
						questo Streamer/Youtuber per vedere gli errori che compie, e di non
						replicarli.</span
					>
				</li>

				<li class="mb-6 list-disc ml-16">
					<a
						class="hover:text-red-500 transition-all duration-300 ease-in-out font-bold"
						href="https://www.twitch.tv/brizz94"
						>Brizz</a
					>
					<span
						>un ex giocatore professionista di LoL, anche lui main support, ma
						che se la cava bene in quasi tutti i ruoli e secondo me è quello che
						intrattiene meglio.</span
					>
				</li>
			</ul>
			<div class="mt-8 w-1/2 m-auto rounded-lg">
				<a href="https://www.youtube.com/watch?v=6smedOMJnEI">
					<img src="/Youtube kyrenis.jpg" alt="" />
				</a>
			</div>
			<Section />
		</div>
	</div>
	<Footer />
</template>
