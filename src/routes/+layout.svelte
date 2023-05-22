<script lang="ts">
	import '$lib/scss/minireset.scss';
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main class="main">
	<slot />
</main>
<Footer />

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8rem;
		width: 100%;
	}
</style>
