<script lang="ts">
	let mapUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.5367069629124!2d9.996807955635504!3d44.818573333444434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780610fc6baf70f%3A0xeef1cc54b70ac796!2sWeMove%20Personal%20Training%20Center!5e0!3m2!1sit!2sfr!4v1735839985637!5m2!1sit!2sfr';
</script>

<div class="overflow-hidden rounded-3xl bg-zinc-100">
	<iframe
		title="Mappa della palestra"
		src={mapUrl}
		width="100%"
		height="400"
		style="border:0;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		class="w-full"
	></iframe>
</div>
