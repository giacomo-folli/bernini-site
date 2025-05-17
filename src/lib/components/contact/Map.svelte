<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';

	let mapUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.5367069629124!2d9.996807955635504!3d44.818573333444434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780610fc6baf70f%3A0xeef1cc54b70ac796!2sWeMove%20Personal%20Training%20Center!5e0!3m2!1sit!2sfr!4v1735839985637!5m2!1sit!2sfr';
</script>

<div use:viewportAnimate={{ animation: 'fade' }}>
	<h2 class="text-2xl font-light tracking-tight text-black">
		Dove <span class="font-medium">trovarmi</span>
	</h2>
	<div class="mt-6 aspect-video overflow-hidden rounded-2xl bg-zinc-100">
		<iframe
			title="Mappa della palestra"
			src={mapUrl}
			width="100%"
			height="100%"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			class="h-full w-full"
		></iframe>
	</div>
</div>
