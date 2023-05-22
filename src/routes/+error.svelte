<script lang="ts">
	import { page } from '$app/stores';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section>
	<h1 class="title">Houston we have a bug! 🐞</h1>
	<pre>{JSON.stringify($page.error, null, 2)}</pre>
</Section>

<style lang="scss">
	@import '../lib/scss/vars';

	.title {
		font-family: $font-title;
		font-weight: 700;
		font-size: 32px;
		margin-bottom: 2.25rem;
	}

	pre {
		font-size: 1rem;
	}
</style>
