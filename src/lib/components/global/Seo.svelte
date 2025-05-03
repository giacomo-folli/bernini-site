<script lang="ts">
	import { seo } from '$lib/stores/seo';
	import { page } from '$app/stores';

	export let title = $seo.title;
	export let title_short = $seo.title_short;
	export let description = $seo.description;
	export let keywords = $seo.keywords;
	export let image = $seo.image;
	export let type = $seo.type;

	const canonicalUrl = `https://bernini.vercel.app${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={title_short} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={canonicalUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- Canonical -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- JSON-LD -->
	<script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": title,
      "description": description,
      "url": canonicalUrl
    })}
	</script>
</svelte:head>
