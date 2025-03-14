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
				Le Summoner’s Spells
			</h1>
			<p class="text-2xl mb-6 text-[#000000]">
				Le Summoner’s Spells sono dei potenti incantesimi che gli evocatori
				possono usare per ribaltare varie situazioni, ognuna di essa è diversa
				dalle altre, esse sono:
			</p>
			<!-- Griglia -->
			<div class="grid grid-cols-12 gap-16">
				<!-- Singola card -->
				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/FSe1tEBakAA3ONx.jpg" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Heal</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Cura te stesso e un campione alleato vicino
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente gli ADC utilizzano questo incantesimo o alcuni maghi
								in mid lane.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 240 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Ghost_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Ghost</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Aumenta la velocità di movimento e permette di passare
								attraverso le unità
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente viene utilizzato da alcuni campioni che non hanno
								quasi mobility.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 210 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Barrier_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Barrier</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Protegge il tuo campione con uno scudo
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente viene usato da alcuni maghi in mid lane e anche
								qualche support fragile.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 180 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Exhaust_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Exhaust</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Rallenta un campione nemico e ne riduce i danni che infligge
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente viene utilizzato dai support o qualche top laner.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 210 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Smite_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Smite</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Infligge danni puri ai mostri della giungla e ai minion.
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Utilizzato esclusivamente dai jungler e da nessun altro.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 90 secondi di ricarica
								(due cariche).
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/f5eIzMPw_400x400.jpg" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Cleanse</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Purifica il tuo campione dalla maggior parte degli effetti
								negativi.
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente viene utilizzato dagli ADC e da qualche Mid laner.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 210 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Ignite_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Ignite</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Infligge danni puri ad un campione nemico.
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente viene utilizzato dai Mid laner, dai Support e da
								qualche Top laner.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 210 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Teleport_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">
								Teleport
							</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Teletrasportati su un target alleato, da qualsiasi parte della
								mappa
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solitamente viene utilizzato esclusivamente dai Top Laner.
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 210 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-4 flex flex-col h-full mb-32 hover:scale-125 transition-all"
				>
					<div class="flex justify-center">
						<img class="w-50" src="/Flash_HD.webp" alt="heal" />
					</div>

					<div class="bg-white">
						<div
							class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6 transition-all duration-700 ease-in-out hover:shadow-[inset_0_0_40px_20px_rgba(0,0,0,1)]"
						>
							<h2 class="font-bold text-xl text-center text-[20px]">Flash</h2>
						</div>

						<!-- Contiene le informazioni della card -->
						<div class="mx-6">
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Permette di compiere un teletrasporto istantaneo in un area di
								poche unità.
							</p>
							<p class="text-[#000000] text-base mb-6 h-[80px]">
								Solamente pochi campioni però possono farne a meno
							</p>

							<p class="text-[#000000] text-base pb-8 h-[82px]">
								<i class="fa-solid fa-hourglass-end"></i> 300 secondi di
								ricarica.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Section />
		</div>
	</div>
	<Footer />
</template>
