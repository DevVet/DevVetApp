<script lang="ts">
	import { session } from '$app/stores';
	import Curriculum from '$lib/components/home/Curriculum.svelte';
	import DvLogo from '$lib/components/home/DvLogo.svelte';
	import AppModal from '$lib/components/layout/AppModal.svelte';
	import { createScene } from '$lib/utils/scene';
	import { onMount } from 'svelte';
	import { Button, Container } from 'sveltestrap';

	let el;
	let isModalOpen = false;

	const toggleModal = (): void => {
		isModalOpen = !isModalOpen;
		console.log('TOGGLED');
	};

	onMount(() => {
		createScene(el);
	});
</script>

<div>
	<canvas bind:this={el} />
	<div
		id="cta"
		class="display-flex flex-direction-column align-items-center justify-content-between"
	>
		<DvLogo width="300px" />
		<p class="text-white my-5">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure possimus culpa magnam deleniti,
			temporibus earum tenetur rem facilis, molestiae ullam quaerat architecto facere fugit eveniet
			dolorum saepe minus, maiores quis.
		</p>
		{#if $session?.user}
			<h1 class="text-light">Welcome {$session.user.user_metadata.full_name}</h1>
		{:else}
			<Button outline on:click={toggleModal}>Login</Button>
		{/if}
	</div>
</div>
<Container>
	<Curriculum width="100%" />
</Container>
<AppModal open={isModalOpen} {toggleModal} />

<style>
	canvas {
		width: 100%;
		height: 100%;
	}

	#cta {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 30%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
