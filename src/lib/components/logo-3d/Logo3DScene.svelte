<script>
	import { T } from '@threlte/core';
	import { OrbitControls, interactivity, useGltf } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	interactivity();
	const scale = spring(1);
</script>

<T.PerspectiveCamera
	makeDefault
	position={[15, -1, 15]}
	fov={15}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls
		autoRotate
		enableZoom={false}
		enablePan={false}
		enableDamping
		autoRotateSpeed={5}
		domElement={document.body}
	/>
</T.PerspectiveCamera>

<T.DirectionalLight position.x={5} position.y={10} intensity={4} />
<T.AmbientLight intensity={3} />

{#await useGltf('/3d/feministech-logo.glb') then gltf}
	<T
		is={gltf.scene}
		rotation.x={-0.25}
		scale={$scale}
		on:pointerenter={() => scale.set(1.1)}
		on:pointerleave={() => scale.set(1)}
	/>
{/await}
