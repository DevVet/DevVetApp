<script lang="ts">
	import LoginModal from '$lib/components/layout/LoginModal.svelte';
	import SignUpModal from '$lib/components/layout/SignUpModal.svelte';
	import supabase from '$lib/utils/db';
	import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import {
		Button,
		Collapse,
		Modal,
		Nav,
		Navbar,
		NavbarBrand,
		NavbarToggler,
		NavItem,
		NavLink
	} from 'sveltestrap';

	let email, password: string;
	let isOpen = false;
	let isModalOpen = false;
	let isSignUp = false;

	const toggleModal = (): void => {
		isModalOpen = !isModalOpen;
		isSignUp = false;
	};

	const handleUpdate = (event): void => {
		isOpen = event.detail.isOpen;
	};

	const setUser = (event) => {};

	const handleSignUp = (event) => {
		console.log(event.detail);
		isModalOpen = false;
	};

	const handleLogin = (event) => {
		console.log(event.detail);
		isModalOpen = false;
	};
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
	/>
</svelte:head>

<Navbar class="align-items-center" color="dark" dark expand="md">
	<NavbarBrand href="/"
		><span class="h3 text-white">D</span>ev<span class="h3 text-white">V</span>et</NavbarBrand
	>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse
		class=" align-items-center justify-content-end"
		{isOpen}
		navbar
		expand="md"
		on:update={handleUpdate}
	>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/blog">Blog</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/about">About</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://discord.gg/kVsrDTByS7"><Fa icon={faDiscord} size="2x" /></NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://github.com/devvet"><Fa icon={faGithub} size="2x" /></NavLink>
			</NavItem>
			<Button on:click={toggleModal}>Login</Button>
		</Nav>
	</Collapse>
</Navbar>
<Modal class="p-3" isOpen={isModalOpen} toggle={toggleModal}>
	{#if isSignUp}
		<SignUpModal {toggleModal} {supabase} on:signUp={handleSignUp} />
	{:else}
		<LoginModal
			{toggleModal}
			{supabase}
			on:login={handleLogin}
			on:showSignUp={() => (isSignUp = true)}
		/>
	{/if}
</Modal>
