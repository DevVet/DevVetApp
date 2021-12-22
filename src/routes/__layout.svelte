<script lang="ts" type="module">
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import AppModal from '$lib/components/layout/AppModal.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import supabase from '$lib/utils/supabase';

	if (browser) {
		$session = supabase.auth.session();
		supabase.auth.onAuthStateChange((_, authSession) => {
			console.log(authSession);
			$session = authSession;
		});
	}

	let isModalOpen = false;

	const toggleModal = (): void => {
		isModalOpen = !isModalOpen;
	};
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
	/>
	<style>
		body {
			width: 100%;
			overflow-x: hidden;
		}

		#svelte {
			width: 100%;
		}
	</style>
</svelte:head>
<main id="wasm" />
<Navbar on:toggleModal={toggleModal} />
<AppModal open={isModalOpen} {toggleModal} />
<slot />
