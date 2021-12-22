<script lang="ts">
	import { session } from '$app/stores';
	import LoginModal from '$lib/components/layout/LoginModal.svelte';
	import SignUpModal from '$lib/components/layout/SignUpModal.svelte';
	import UserMenu from '$lib/components/layout/UserMenu.svelte';
	import supabase from '$lib/utils/supabase';
	import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import {
		Button,
		Collapse,
		Container,
		Image,
		Modal,
		Nav,
		Navbar,
		NavbarBrand,
		NavbarToggler,
		NavItem,
		NavLink
	} from 'sveltestrap';

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
	<NavbarBrand href="/">
		<Container>
			<Image style="max-height: 50px;" src="images/codeBWTransparent.png" />
			<div style="margin-top: 5px">
				<span class="h3 text-white mb-0 ml-3">D</span>
				<span style="margin: 0 -5px">ev</span>
				<span class="h3 text-white mb-0">V</span>
				<span style="margin: 0 -5px">et</span>
			</div>
		</Container>
	</NavbarBrand>
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
			{#if $session}
				<UserMenu user={$session.user} />
			{:else}
				<Button on:click={toggleModal}>Login</Button>
			{/if}
		</Nav>
	</Collapse>
</Navbar>
<Modal class="p-3" isOpen={isModalOpen} toggle={toggleModal}>
	{#if isSignUp}
		<SignUpModal {toggleModal} {supabase} on:signUp={() => (isModalOpen = false)} />
	{:else}
		<LoginModal
			{toggleModal}
			{supabase}
			on:login={handleLogin}
			on:showSignUp={() => (isSignUp = true)}
		/>
	{/if}
</Modal>
