<template>
	<Header />
	<div class="bg-[#949E9D]">
		<div class="max-w-screen-lg mx-auto py-8">
			<div>
				<h1 class="text-3xl font-bold text-[#000000] text-[44px] mb-4">
					About
				</h1>
				<div class="grid grid-cols-12 gap-4">
					<div class="col-span-2 flex justify-center items-center">
						<img
							class="rounded-full w-40 aspect-square object-cover"
							src="/Ezreal.jfif"
							alt=""
						/>
					</div>
					<div class="col-span-10 text-[#000000] px-16">
						<p class="text-xl">
							<i class="italic">Ez+ </i>
							LoL nasce come progetto per la materia “Web Design” insegnata dal
							prof. <i class="underline">Ciro Esposito</i>.
						</p>
						<p class="text-xl mt-8">
							League of Legends è un gioco molto complicato e complesso, quindi
							all'interno del sito troverete tutte le informazioni che avrei
							voluto sapere quando iniziai a giocare a League of Legends più di
							7 anni fa.
						</p>
						<p class="text-xl mt-8">
							L'idea del sito nasce proprio da tutta l'esperienza che ho di
							League of Legends.
						</p>
						<p class="text-xl mt-8">
							Qui sotto troverete le guide per imparare le basi del gioco:
						</p>
					</div>
				</div>
			</div>
		</div>
		<Section />
	</div>

	<Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/Section.vue";

export default {
	components: { Header, Footer, Section },
};
</script>
