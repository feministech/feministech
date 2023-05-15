<script lang="ts">
	import GrainyGradientImg from '../../assets/img/grainy-gradient-1.webp';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 450.37 520.87"
>
	<g style="clip-path: url(#clippath)">
		<image
			width="609"
			height="610"
			transform="translate(-135.49 -71.74) scale(1.02)"
			xlink:href={GrainyGradientImg}
		/>
	</g>
	<defs>
		<clipPath id="clippath">
			<path
				style="clip-rule: evenodd;fill: none;"
				d="M254.92,292.48c-51.81,61.73,17.46,197.7-58.32,225.15-67.29,24.38-96.91-95.2-137.28-154.3C32.04,323.4,9.36,283.35,3.75,235.31-2.41,182.48-4.62,126.54,26.69,83.54,61.03,36.37,116.56-9.44,173.83,1.69c55.24,10.73,53.55,95.01,98.04,129.46,54.03,41.84,185.36,16.5,178.22,84.46-7.6,72.29-148.44,21.19-195.17,76.86Z"
			/>
		</clipPath>
	</defs>
</svg>

<style lang="scss">
	svg {
		position: absolute;
		width: 436px;
		left: -16rem;
		bottom: -8rem;
		opacity: 0.75;
		filter: blur(64px);
		z-index: -1;
	}
</style>
