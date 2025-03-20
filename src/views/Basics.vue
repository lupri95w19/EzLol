<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";

export default {
	components: { Header, Footer, Section },
	data() {
		return {
			//   title: "Il Mio Titolo",
		};
	},
};
</script>

<template>
	<Header />
	<div class="bg-[#949E9D]">
		<div class="max-w-screen-lg mx-auto py-8">
			<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">
				Le basi del gioco
			</h1>
			<p class="text-2xl mb-2 text-[#000000]">
				In League of Legends ci sono vari aspetti che bisogna padroneggiare il
				prima possibile, questi aspetti verranno spiegati in questa pagina.
			</p>
			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-14 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Fase di Corsia
			</h2>
			<p class="text-2xl mb-2 text-[#000000]">
				La fase di corsia è il punto più importante del gioco, da questa fase
				infatti, si avranno le basi per quello che sarà poi il “Late game”,
				ovvero la fase finale della partita.
			</p>
			<p class="text-2xl mb-2 text-[#000000]">
				Nella fase di corsia troviamo il nostro o i nostri avversari, ovvero i
				Campioni nemici, i Minions e le Torri.
			</p>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mt-14 mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Minion
			</h3>
			<p class="text-2xl mb-2 text-[#000000]">
				I minion sono questi esseri, completamente gestiti dall'IA, che si
				generano periodicamente, le ondate si generano allo stesso tempo per
				tutte le lane, inoltre il loro comportamento è sempre fisso.
			</p>
			<div class="grid grid-cols-12 place-items-center mb-4">
				<p class="text-2xl text-[#000000] col-span-6">
					È importante “lasthittare”, ovvero dare il copo di grazia, ai minion,
					così ci daranno soldi e ci permetteranno di diventare più forti
					comprando gli oggetti.
				</p>
				<img
					src="/Minions.webp"
					class="rounded col-span-6 h-[200px]"
					alt="Minions"
				/>
			</div>
			<p class="text-2xl mb-2 text-[#000000]">
				Concentratevi maggiormente sull’uccidere i minion al posto di combattere
				con i campioni nemici, i minion permettono un vantaggio in gold
				incredibile!
			</p>
			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mt-14 mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Minion
			</h3>
			<p class="text-2xl mb-2 text-[#000000]">
				Le torri sono degli obiettivi presenti in TOP, MID e BOT.
			</p>

			<div class="grid grid-cols-12 place-items-center mb-4">
				<p class="text-2xl text-[#000000] col-span-6">
					Le torri attaccheranno qualsiasi nemico si avvicini, scegliendo il
					target più vicino, quindi ci si deve approcciare con i minion per
					distruggerle. Nel caso di danneggiamento di un campione nemico, la
					torre si concentrerà sul campione avversario che sta attaccando il
					nemico.
				</p>
				<img
					src="/Torre.webp"
					class="rounded col-span-6 h-[250px]"
					alt="tower"
				/>
			</div>
			<p class="text-2xl mb-2 text-[#000000]">
				Fino al minuto 14 le torri avranno le “Plates”, o placche, infatti ad
				ogni 1000 danni inflitti, daranno dei soldi, divisi con i campioni
				alleati vicini.
			</p>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mt-14 mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Minion
			</h3>
			<div class="grid grid-cols-12 place-items-center mb-4">
				<p class="text-2xl text-[#000000] col-span-6">
					L’inibitore si trova all’interno della base, ed è protetto dalla
					propria torre, inoltre se distrutto farà generare alla squadra
					avversia un’ondata con un Super Minion, nella corsia dove l’Inibitore
					è distrutto.
				</p>
				<img
					src="/Blue_Inhibitor.webp"
					class="rounded col-span-6 h-[175px]"
					alt="Inhibitor"
				/>
			</div>
			<p class="text-2xl mb-2 text-[#000000]">
				Se distrutto farà generare alla squadra avversia un’ondata con un Super
				Minion, nella corsia dove l’Inibitore è distrutto, e verrà rigenerato
				dopo 5 minuti.
			</p>
			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mt-14 mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Minion
			</h3>
			<div class="grid grid-cols-12 place-items-center mb-4">
				<p class="text-2xl text-[#000000] col-span-6">
					Il Nexus è l’obiettivo più importante del gioco, infatti non appena
					verrà distrutto da una squadra, la partità finirà e quella squadra
					vincerà la partita.
				</p>
				<img
					src="/Blue_Nexus.webp"
					class="rounded col-span-6 h-[175px]"
					alt="Nexus"
				/>
			</div>
			<p class="text-2xl mb-2 text-[#000000]">
				Il Nexus è posto dietro gli Inibitori, protetto da 2 Torri, queste 2
				Torri e il Nexus, sono bersagliabili solamente se almeno 1 Inibitore è
				distrutto.
			</p>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-14 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Extra: Invade
			</h2>
			<p class="text-2xl mb-2 text-[#000000]">
				L’invade è una pratica che vede una squadra invadere la giungla nemica,
				solitamente si fa quando si hanno determinati campioni, per esempio con
				tanti effetti di controllo.
			</p>
			<p class="text-2xl mb-2 text-[#000000]">
				Grazie all’invade si possono decidere le sorti della fase iniziale della
				partita.
			</p>

			<h2 class="text-3xl font-bold text-[#000000] text-[44px] mt-14 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle">
				Extra: Guida sulla fase di corsia
			</h2>
			<p class="text-2xl mb-2 text-[#000000]">
				Se volete arricchire le vostre conoscenze sulla fase di corsia, vi
				consiglio di vedere questo video
			</p>
			<div class="mt-8 w-1/2 m-auto">
				<a
					href="https://www.youtube.com/watch?v=PS2JwKcfqL8"
				>
					<div class="relative w-full pb-[56.25%]">
						<iframe
							class="absolute inset-0 w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/PS2JwKcfqL8"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</a>
			</div>

			<Section />
		</div>

		<Footer />
	</div>
</template>
