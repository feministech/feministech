<script lang="ts">
	type Tab = {
		id: string;
		label: string;
	};

	export let tabs: Tab[] = [];
	export let activeTab: string;
</script>

<ul class="tabs">
	{#each tabs as tab}
		<li class="tab" class:active={tab.id === activeTab}>
			<button on:click={() => (activeTab = tab.id)}>{tab.label}</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import '../scss/vars';

	.tabs {
		display: flex;
		gap: 1.5rem;
		border-bottom: 1px solid rgba($primary, 0.2);
		margin-bottom: 1.25rem;

		.tab {
			button {
				display: flex;
				background: none;
				border: none;
				font-size: 16px;
				padding: 1rem 0.25rem;
				cursor: pointer;
			}

			&.active button {
				border-bottom: 2px solid $primary;
				color: $primary;
			}
		}
	}
</style>
