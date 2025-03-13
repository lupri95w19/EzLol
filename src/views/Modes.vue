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
				Le modalità
			</h1>
			<p class="text-2xl mb-6 text-[#000000]">
				In League of Legends sono presenti varie modalità, alcune sono a
				rotazione quindi non saranno sempre presenti, ma quelle che sono sempre
				presenti hanno lo scopo di distruggere il nexus nemico, ovvero il nucleo
				di energia della base, che viene protetto dalle 11 torri per la “Landa
				degli evocatori” e 3 per “ARAM”, queste modalità sono:
			</p>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Landa degli evocatori
			</h2>
			<img
				class="max-h-full object-contain rounded-lg mb-18"
				src="/Cattura.jpg"
				alt="rift"
			/>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Selezione segreta
			</h3>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità si gioca in 5vs5, una volta accettata la partita, è
				obbligatorio scrivere in chat la corsia (o lane in inglese) nella quale
				si vuole giocare, altrimenti potrebbe essere presa da un altro
				giocatore.
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				Questa modalità è sconsigliata, perché molte volte alcuni vorranno
				prendere il vostro ruolo e quindi vi ritroverete con una persona di
				troppo nella vostra corsia.
			</p>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Draft
			</h3>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità si gioca in 5vs5, una volta in lobby vi verrà chiesto
				di scegliere 2 corsie che vorreste giocare, una principale e una
				secondaria.
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				Questa modalità comprende anche un sistema di “ban” dei campioni, ognuno
				in partita potrà bannare un campione a testa, una volta bandito (o
				banned in inglese)... grazie al fatto che le lane sono selezionate da
				voi, è meno probabile che qualcuno provi a prendervi il ruolo.
			</p>
			<div class="grid grid-cols-12 gap-4 mb-12">
				<img class="col-span-6 rounded-lg" src="/Cattura3.jpg" alt="client" />
				<img
					class="col-span-6 rounded-lg"
					src="/Cattura4ph.jpg"
					alt="role select"
				/>
			</div>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Classificata Solo/Duo
			</h3>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità si gioca in 5vs5, una volta in lobby vi verrà chiesto
				di scegliere le 2 corsie che vorreste giocare, una principale e una
				secondaria... questa modalità può essere avviata solamente se si è da
				soli oppure con un’altra persona nel gruppo e comprende anche un sistema
				di “ban” dei campioni, ognuno in partita potrà bannare un campione a
				testa, una volta bandito (o banned in inglese).
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				Per poter giocare a questa modalità è necessario aver raggiunto il
				livello 30, ed aver almeno 20 campioni acquistati, questa modalità è
				consigliata solamente dopo aver fatto un po’ di esperienza nel gioco.
				Dalla community vengono valorizzate molto le Solo/Duo.
			</p>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Classificata Flex
			</h3>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità si gioca in 5vs5, una volta in lobby vi verrà chiesto
				di scegliere le 2 corsie che vorreste giocare, una principale e una
				secondaria... questa modalità può essere avviata solamente se il proprio
				gruppo non è composto da 4 persone, e comprende anche un sistema di
				“ban” dei campioni, ognuno in partita potrà bannare un campione a testa,
				una volta bandito (o banned in inglese).
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				Per poter giocare a questa modalità è necessario aver raggiunto il
				livello 30, ed aver almeno 20 campioni acquistati, questa modalità è
				consigliata solamente dopo aver fatto un po’ di esperienza nel gioco.
			</p>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				ARAM
			</h2>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità si gioca in 5vs5, si gioca tutti in un’unica corsia.
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				Non è consigliato giocare a questa modalità, perché grazie ad alcune
				statistiche prese personalmente, sono arrivato alla conclusione che chi
				gioca questa modalità, sarà più propenso a giocare male.
			</p>
			<img
				class="max-h-full object-contain rounded-lg mb-18"
				src="/Cattura9.jpg"
				alt="rift"
			/>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Co-op VS. IA
			</h2>
			<p class="text-2xl text-[#000000] mb-6">
				In queste modalità si gioca in 5vs5, una squadra è composta da bot, e
				l’altra invece da persone.
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				Queste modalità sono utilissime per imparare a giocare all'inizio.
			</p>
			<img
				class="max-h-full object-contain rounded-lg mb-18"
				src="/Cattura5.jpg"
				alt="rift"
			/>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Addestramento
			</h2>
			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Tutorial
			</h3>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità è possibile completare il primo tutorial del gioco,
				che insegna le basi, come attaccare per esempio
			</p>
			<p class="text-2xl text-[#000000] mb-6">
				È consigliato giocare al tutorial quando si inizia a giocare.
			</p>
			<img
				class="max-h-full object-contain rounded-lg mb-18"
				src="/Cattura6c.jpg"
				alt="rift"
			/>

			<h3
				class="text-xl font-bold text-[#000000] text-[24px] mb-4 relative before:content-[''] before:bg-[#31ddb2] before:inline-block before:w-[10px] before:h-[40px] before:mr-2 before:align-middle"
			>
				Strumento di allenamento:
			</h3>
			<p class="text-2xl text-[#000000] mb-6">
				In questa modalità è possibile letteralmente testare ogni aspetto del
				gioco, insomma è una palestra.
			</p>
			<img
				class="max-h-full object-contain rounded-lg mb-18"
				src="/Cattura7.jpg"
				alt="rift"
			/>
			<Section />
		</div>
	</div>
	<Footer />
</template>
