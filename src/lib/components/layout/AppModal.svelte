<script lang="ts">
	import LoginModal from '$lib/components/layout/LoginModal.svelte';
	import SignUpModal from '$lib/components/layout/SignUpModal.svelte';
	import { faTimes } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { Button, Modal } from 'sveltestrap';

	export let open = false;
	let isSignUp = false;

	export let toggleModal: () => void;

	const toggle = () => {
		isSignUp = false;
		toggleModal();
	};

	const handleLogin = (event) => {
		console.log(event.detail);
		open = false;
	};
</script>

<Modal class="p-3" isOpen={open} {toggle}>
	<div class="text-end">
		<Button
			class="text-white bg-dark p-2 position-absolute"
			style="right: -20px;top: -20px;width: 30px;height: 30px;"
			size="lg"
			on:click={toggle}><Fa icon={faTimes} /></Button
		>
	</div>
	{#if isSignUp}
		<SignUpModal {toggle} on:signUp={() => (open = false)} />
	{:else}
		<LoginModal {toggle} on:login={handleLogin} on:showSignUp={() => (isSignUp = true)} />
	{/if}
</Modal>
