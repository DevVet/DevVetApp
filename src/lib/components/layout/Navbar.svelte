<script lang="ts">
	import { session } from '$app/stores';
	import UserMenu from '$lib/components/layout/UserMenu.svelte';
	import innerWidth from '$lib/stores/innerWidth';
	import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from 'sveltestrap';

	const dispatch = createEventDispatcher();

	onMount(() => {
		const handleResize = () => innerWidth.set(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
	/>
</svelte:head>

<nav>
	{#if $innerWidth > 700}
		<div id="nav-items">
			<a href="/about">About</a>
			<a href="/blog">Blog</a>
			<Image style="max-height: 60px; filter:invert()" src="images/codeBWTransparent.png" />
			<a href="https://discord.gg/kVsrDTByS7"><Fa icon={faDiscord} size="2x" /></a>
			<a href="https://github.com/devvet"><Fa icon={faGithub} size="2x" /></a>
		</div>
	{:else}
		<Image style="max-height: 60px; filter:invert()" src="images/codeBWTransparent.png" />

		<Dropdown class="position-absolute" style="top:16px; left: 16px;">
			<DropdownToggle color="dark"><Fa icon={faBars} /></DropdownToggle>
			<DropdownMenu class="bg-dark">
				<DropdownItem><a href="/about">About</a></DropdownItem>
				<DropdownItem><a href="/blog">Blog</a></DropdownItem>
				<DropdownItem>
					<a href="https://discord.gg/kVsrDTByS7"><Fa icon={faDiscord} size="2x" /></a>
				</DropdownItem>
				<DropdownItem
					><a href="/about"
						><a href="https://github.com/devvet"><Fa icon={faGithub} size="2x" /></a></a
					></DropdownItem
				>
				<DropdownItem class="w-100">
					<Button class="w-100" on:click={() => dispatch('toggleModal')}>Login</Button>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	{/if}
	{#if $session?.user}
		<UserMenu user={$session.user} />
	{:else if $innerWidth > 700}
		<Button
			style={`position: absolute; top: 16px; right: 16px;`}
			on:click={() => dispatch('toggleModal')}
		>
			Login
		</Button>
	{/if}
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80px;
		z-index: 999;
		background: black;
	}

	#nav-items {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		height: 100%;
		width: 70%;
		max-width: 600px;
		justify-items: center;
		align-items: center;
	}

	a {
		color: #888;
		transition: color 300ms;
		text-decoration: none;
	}

	a:link,
	a:visited,
	a:active {
		text-decoration: none;
	}

	#nav-items a:hover {
		color: white;
		transition: color 300ms;
		text-decoration: none;
	}
</style>
