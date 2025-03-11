<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
	components: { Header, Footer },
	mounted() {
		document.title = "Home";
	},
	methods: {
		openLink(url) {
			if (url.startsWith("http")) {
				window.open(url, "_blank"); // Apri link esterno in una nuova scheda
			} else {
				this.$router.push(url); // Cambia vista interna con Vue Router
			}
		},
	},
};
</script>

<template>
	<div>
		<Header />
		<!-- <div class="w-screen bg-[#949E9D]"> -->
		<div class="bg-[#949E9D]">
			<div class="max-w-screen-lg mx-auto py-8">
				<div>
					<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">
						Ez+ LoL
					</h1>
					<p class="text-2xl mb-4 text-[#000000]">
						La guida più semplice e veloce per imparare tutte le basi del gioco
						e per iniziare a giocare al meglio!
					</p>
				</div>

				<!-- Cards -->
				<div class="grid grid-cols-3 mt-16">
					<!-- Singola card -->
					<div
						@click="openLink('/basics')"
						class="max-w-[250px] rounded overflow-hidden shadow-lg ms-0 mb-32 w-full hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white cursor-pointer"
					>
						<img
							class="w-full h-[300px] object-cover object-left"
							src="/league-of-legends-lol-dio-re-garen-sfondo-3750x3000_34.jpg"
							alt="Garen"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a
									href="/basics"
									class="font-bold text-xl text-center text-[20px]"
									>Basi del gioco</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete le informazioni basilari per imparare a giocare.
								</p>
								<p class="text-[#000000]">
									Comprende le informazioni sulla laning phase.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#laningphase</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg m-auto mb-32 w-100 hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white cursor-pointer"
						@click="openLink('/roles')"
					>
						<img
							class="w-full h-[300px] object-cover object-right"
							src="/1182002.jpg"
							alt="Yasuo"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>I ruoli</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete le informazioni sui relativi ruoli di LoL.
								</p>
								<p class="text-[#000000]">
									Comprende le informazioni sulla Top, Mid, Bot e la Giungla.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#roles</span
							>
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#lanes</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg me-0 ms-auto mb-32 w-100 hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white cursor-pointer"
						@click="openLink('/classes')"
					>
						<img
							class="w-full h-[300px] object-cover"
							src="/wp3774206.jpg"
							alt="Aurelion Sol"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>Classi</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete le informazioni sulle relative classi.
								</p>
								<p class="text-[#000000]">
									Comprende le informazioni importanti per le classi.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#classes</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg ms-0 mb-32 w-full hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white"
						@click="openLink('/crafting')"
					>
						<img
							class="w-full h-[300px] object-cover"
							src="/wallpapersden.com_heimerdinger-in-league-of-legends_2932x2932.jpg"
							alt="Heimerdinger"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>Crafting</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete tutte le informazioni riguardanti il crafting.
								</p>
								<p class="text-[#000000]">
									Comprende le informazioni sul funzionamento del crafting.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#crafting</span
							>
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#loot</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg m-auto mb-32 w-100 hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white"
						@click="openLink('/mental')"
					>
						<img
							class="w-full h-[300px] object-cover"
							src="/Dark-Star-Karma.jpg"
							alt="Karma"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>Mentalità</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete tutte i consigli per mantenere la calma.
								</p>
								<p class="text-[#000000]">
									Comprende i miei consigli personali per rimanere calmi.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#mental</span
							>
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#chill</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg me-0 ms-auto mb-32 w-100 hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white"
						@click="
							openLink(
								'https://www.facebook.com/LeagueOfLegendsItaly/?locale=it_IT'
							)
						"
					>
						<img
							class="w-full h-[300px] object-cover"
							src="/2761734.jpg"
							alt="Pyke"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>LFG?</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Cerchi qualche italiano con cui giocare?
								</p>
								<p class="text-[#000000]">
									Entra in questo gruppo Facebook e trova persone con cui
									giocare.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#lfg</span
							>
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#ita</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg ms-0 mb-32 w-full hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white"
					>
						<img
							class="w-full h-[300px] object-cover"
							src="/Wallpaper_Kayle_Morgana_Base.jpg"
							alt="Kayle e Morgana"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>Le modalità</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete tutte le informazioni riguardanti le principali
									modalità.
								</p>
								<p class="text-[#000000]">
									Comprende le informazioni sulle modalità più importanti e non
									su quelle a rotazione.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#gamemodes</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg m-auto mb-32 w-100 hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white"
					>
						<img
							class="w-full h-[300px] object-cover object-right"
							src="/riot-games-michal-ivan-kog-maw-urgot-vel-koz-viktor-cho-gath.jpg"
							alt="Viktor"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>Incantesimi</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete tutte le informazioni sugli incantesimi degli
									evocatori.
								</p>
								<p class="text-[#000000]">
									Comprende le informazioni sulle summoners, e consigli su quali
									campioni usarli.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#summonersspell</span
							>
						</div>
					</div>

					<!-- Singola card -->
					<div
						class="max-w-[250px] rounded overflow-hidden shadow-lg me-0 ms-auto mb-32 w-100 hover:scale-105 transition-all hover:shadow-[0_0_30px_7px_rgba(0,0,0,0.5)] bg-white"
					>
						<img
							class="w-full h-[300px] object-cover object-right"
							src="/238c3a1aaa2aec35366691673a348bdb.jpg"
							alt="Ryze"
						/>
						<!-- Contenitore di tutto il testo -->
						<div class="">
							<!-- Contiene il titolo della card -->
							<div
								class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
							>
								<a href="#" class="font-bold text-xl text-center text-[20px]"
									>Siti utili</a
								>
							</div>

							<!-- Contiene le informazioni della card -->
							<div class="mx-6">
								<p class="text-[#000000] text-base mb-2">
									Qui troverete alcuni siti e programmi utili.
								</p>
								<p class="text-[#000000]">
									Novizi o veterani? Non fa differenza, questi siti e queste app
									aiutano sempre e comunque.
								</p>
							</div>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#info</span
							>
							<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#learn</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
