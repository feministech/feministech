<script lang="ts">
	import MembersCircle from '$lib/components/MembersCircle.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section id="participantes">
	<Title pretitle="A gente">Quem participa</Title>
	<MembersCircle />
	<p>E muitas outras pessoas incríveis... 🤩✨</p>
</Section>

<style lang="scss">
	@import '../scss/vars';

	p {
		text-align: center;
		margin-top: 2.25rem;
	}
</style>
