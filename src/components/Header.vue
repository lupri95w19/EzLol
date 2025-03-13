<script>
export default {
	computed: {
		//gestione dell'immagine dinamica
		bannerImage() {
			const bannerImages = {
				"/": "/Banner-Qq7bNmtVH-transformed.jpeg",
				"/about": "/Banner-Qq7bNmtVH-transformed.jpeg",
				"/basics":
					"/wallpapersden.com_lee-sin-hd-league-of-legends_1920x1080.jpg",
				"/roles": "/2139004.jpg",
				"/classes": "/league-of-legends-06.jpg",
				"/crafting": "/thumb-1920-864277.jpg",
				"/mental": "/600528.jpg",
				"/modes": "/jax-league-of-legends-wallpaper-hd-1920x1080-171032.jpg",
			};
			// Ritorna il banner corrispondente alla pagina, altrimenti un'immagine di default
			return bannerImages[this.$route.path] || "/default-banner.jpg";
		},
	},
};
</script>

<template>
	<!-- <h1>{{ title }}</h1> -->
	<div class="overflow-hidden">
		<div class="grid grid-rows-4 h-[470px] overflow-hidden w-screen">
			<div
				class="row-span-1 flex justify-between items-center bg-[#343434] text-[#f7fff7] p-4 h-[120px] px-8 z-1"
			>
				<a
					href="/"
					class="text-[32px] hover:shadow-red-800 textHover transition-all"
					>Ez+ LoL</a
				>
				<div class="grid grid-cols-2 gap-0 text-[20px]">
					<a href="/" class="textHover transition-all">Home</a>
					<a href="/about" class="textHover transition-all">Su di me</a>
				</div>
			</div>
			<div class="row-span-3">
				<!-- Immagine da mettere dinamica dopo -->
				<img
					:src="bannerImage"
					class="w-full h-full object-cover object-top"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>
