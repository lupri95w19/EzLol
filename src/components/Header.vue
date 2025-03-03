<script>
export default {
	data() {
		return {
			//   title: "Il Mio Titolo",
		};
	},
};
</script>

<template>
	<!-- <h1>{{ title }}</h1> -->
	<div class="h-[350px] overflow-hidden">
		<div
			class="flex justify-between items-center bg-[#343434] text-[#f7fff7] p-4 h-[100px] px-8"
		>
			<a href="/" class="text-[32px] hover:shadow-red-800 textHover transition-all">Ez+ LoL</a>
			<div class="grid grid-cols-2 gap-0 text-[20px]">
				<a href="/" class="textHover transition-all">Home</a>
				<a href="/about" class="textHover transition-all">Su di me</a>
			</div>
		</div>
		<!-- Immagine da mettere dinamica dopo -->
		<img src="/Banner-Qq7bNmtVH-transformed.jpeg" alt="" /> 
	</div>
</template>
