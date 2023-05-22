<script lang="ts">
	import FeministechLogo from '$lib/brand/FeministechLogo.svelte';
	import members from '$lib/data/members.json';

	const qtyOfMembers = 24;
	const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, qtyOfMembers);

	const calculateRingPositions = (ringSize: number, itemCount: number) => {
		const positions: [number, number][] = [];

		if (itemCount <= 0) return positions;

		const angleStep = (2 * Math.PI) / itemCount;
		const radius = ringSize / 2;

		for (let i = 0; i < itemCount; i++) {
			const angle = i * angleStep;
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);
			positions.push([x, y]);
		}

		return positions;
	};

	const rings = [calculateRingPositions(450, 8), calculateRingPositions(780, 16)];
</script>

<div class="members-circle">
	{#each rings as circles, i}
		<div class="members" class:inner={i == 0} class:outer={i == 1}>
			{#each circles as [x, y]}
				{@const index = rings.flat().findIndex(([x2, y2]) => x == x2 && y == y2)}
				{@const member = randomMembers[index]}

				<a
					class="member"
					href="https://github.com/{member}"
					target="_blank"
					rel="noopener noreferrer"
					style="--x:{x}px;--y:{y}px"
				>
					<figure style="background-image:url(https://github.com/{member}.png)" />
				</a>
			{/each}
		</div>
	{/each}

	<div class="logo">
		<FeministechLogo />
	</div>
</div>

<style lang="scss">
	.members-circle {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 57rem;
		padding: 0 4rem;
	}

	.logo {
		position: absolute;
		width: 14rem;
		height: 14rem;
	}

	.members {
		display: flex;
		justify-content: center;
		align-items: center;
		transform-origin: center;
		animation: rotate infinite linear;

		figure {
			animation: rotate infinite linear reverse;
		}

		.member {
			position: absolute;
			border-radius: 50%;
			overflow: hidden;
			transform: translate(var(--x), var(--y));
			transition: all 0.2s ease;

			&:hover {
				transform: translate(var(--x), var(--y)) scale(1.1);
			}

			figure {
				width: 100%;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
		}
	}

	.inner .member {
		width: 9rem;
		height: 9rem;
	}

	.outer .member {
		width: 7.5rem;
		height: 7.5rem;
	}

	.inner,
	.inner figure {
		animation-duration: 120s;
	}

	.outer,
	.outer figure {
		animation-duration: 80s;
		animation-direction: reverse;
	}

	.outer figure {
		animation-direction: normal;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
