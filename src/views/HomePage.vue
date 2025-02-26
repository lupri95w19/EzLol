<template>
	<div>
		<Header />
		<div class="w-screen bg-[#949E9D]">
			<div class="container xl mx-auto py-8">
				<div>
					<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">
						Ez+ LoL
					</h1>
					<p class="text-[27px] mb-4">
						La guida più semplice e veloce per imparare tutte le basi del gioco
						e per iniziare a giocare al meglio!
					</p>
				</div>

				<!-- Cards -->

				<div class="max-w-sm rounded overflow-hidden shadow-lg">
					<img
						class="w-full"
						src="../../public/league-of-legends-lol-dio-re-garen-sfondo-3750x3000_34.jpg"
						alt="Garen god-king"
					/>
                    <!-- Contenitore di tutto il testo -->
					<div class="">

                        <!-- Contiene il titolo della card -->
						<div class="mb-2 py-4 m-0 bg-[#6693A6] flex justify-center px-6">
							<a
								href="#"
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
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
	components: { Header },
};
</script>
