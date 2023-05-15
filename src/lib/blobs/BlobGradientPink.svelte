<script lang="ts">
	import GrainyGradientImg from '../../assets/img/grainy-gradient-2.webp';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 406.78 491.44"
>
	<g style="clip-path: url(#gradient-pink-clippath)">
		<image
			width="409"
			height="493"
			transform="translate(-1.02 -3.21)"
			xlink:href={GrainyGradientImg}
		/>
	</g>
	<clipPath id="gradient-pink-clippath">
		<path
			class="cls-1"
			d="M91.14,227.78c86.4-37.6,96-93.67,90-117-17.33-16-33-57.2,43-94,95-46,188,9,141,87-47,78,127,215-16,340-143,125-315-32-336-62-21-30-30-107,78-154Z"
		/>
	</clipPath>
</svg>

<style lang="scss">
	svg {
		position: absolute;
		width: 406px;
		right: -13rem;
		top: 4rem;
		filter: blur(64px);
		z-index: -1;
	}
</style>
