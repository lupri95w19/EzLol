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
				Ottieni la giusta mentalità
			</h1>
			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-12 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Calma è solamente una partita
			</h2>

			<div class="grid grid-cols-12 justify-between gap-16 mb-24 items-center">
				<div class="col-span-6">
					<p class="text-2xl mb-6 text-[#000000]">
						La mentalità è molto importante in League of Legends, se si dovesse
						perdere la calma, la partita si potrebbe dire completamente persa
						per voi... infatti è molto importante trovare un modo per rimanere
						calmi.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						Nel caso voi perdiate molte partite di fila, e vi stiate sentendo
						molto arrabbiati (o “Tiltati” secondo il gergo di LoL) è meglio che
						facciate una pausa, a volte anche di qualche giorno.
					</p>
				</div>
				<div class="col-span-6 flex justify-center items-center max-h-[300px]">
					<img
						class="max-h-full object-contain rounded-lg"
						src="/tyler1rage-tyler1.gif"
						alt="T1 rage"
					/>
				</div>
			</div>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Flaming/Insulti pesanti
			</h2>
			<div class="grid grid-cols-12 justify-between gap-16 mb-24 items-center">
				<div class="col-span-6">
					<p class="text-2xl mb-6 text-[#000000]">
						Un punto molto importante da comprendere è il seguente:
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						Non insultate pesantemente (o “Flammare” secondo il gergo di LoL)
						nessuno su LoL, bastano poche parole pesanti e verrete bannati.
					</p>

					<p class="text-2xl mb-6 text-[#000000]">
						Il primo Ban mediamente dura 14 giorni, mentre dal secondo in poi
						potrebbe essere permanente, e nel caso voi dopo voleste giocare
						ancora, dovreste rifare l’account.
					</p>
				</div>
				<div class="col-span-6 flex justify-center items-center max-h-[300px]">
					<img
						class="max-h-full object-contain rounded-lg"
						src="/BrownShadowyBluegill-size_restricted.gif"
						alt="rage"
					/>
				</div>
			</div>

			<h2
				class="text-3xl font-bold text-[#000000] text-[44px] mt-32 mb-4 relative before:content-[''] before:bg-[#DD6031] before:inline-block before:w-[10px] before:h-[60px] before:mr-2 before:align-middle"
			>
				Relax
			</h2>

			<p class="text-2xl mb-6 text-[#000000]">
				L’essere tranquillo durante le partite a LoL è essenziale, come già
				sottolineato, quindi rilassatevi prima di giocare, altrimenti non farete
				altro che irritarvi sempre di più.
			</p>

			<p class="text-2xl mb-2 text-[#000000]">
				Consiglio alcuni canali in particolare da guardare, nel caso voi
				vogliate passare tempo o comunque rilassarvi:
			</p>
			<ul class="mb-6 text-black text-2xl">
				<li class="hover:text-red-500 transition-all duration-300 ease-in-out">
					<a href="https://www.twitch.tv/kyrenis">Kyrenis</a>
				</li>
				<li class="hover:text-red-500 transition-all duration-300 ease-in-out">
					<a href="https://www.twitch.tv/paoloidolo">Paolo Cannone</a>
				</li>
				<li class="hover:text-red-500 transition-all duration-300 ease-in-out">
					<a href="https://www.twitch.tv/terenas">Terenas</a>
				</li>
			</ul>

			<p class="text-2xl mb-6 text-[#000000]">
				Detto questo è importante che prima o poi chiunque tilterà giocando a
				LoL, è un dato di fatto, quindi cerca solamente di imparare a contenerti
				quando percepisci che stai per tiltare.
			</p>

            <Section />
		</div>
        <Footer />
	</div>
</template>
