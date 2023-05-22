<script>
	import Section from '$lib/layout/Section.svelte';

	export let id = '';
</script>

<Section {id}>
	<center>
		<img src="https://media.tenor.com/Gyn3WQhpjzsAAAAC/vem-a%C3%AD-smile.gif" alt="Vem aí!" />
	</center>
</Section>

<style lang="scss">
	img {
		margin: 4rem 0;
		border-radius: 1rem;
	}
</style>
