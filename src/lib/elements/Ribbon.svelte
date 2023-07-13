<div class="ribbon">
	<p>
		<slot />
	</p>
	<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
		<path fill="#8502BB" d="M89.18 53.82 35.36 0H0l89.18 89.18V53.82Z" />
	</svg>
</div>

<style lang="scss">
	.ribbon {
		position: absolute;
		top: 0;
		right: 0;
		pointer-events: none;

		p {
			position: absolute;
			color: #fff;
			left: calc(50% - 0.5rem);
			top: calc(50% + 0.75rem);
			transform: rotate(45deg) translate(-50%, -50%);
		}
	}
</style>
