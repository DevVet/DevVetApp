<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Container, Input, ModalBody, ModalFooter, ModalHeader, Row } from 'sveltestrap';

	let email, password: string;

	export let toggleModal: () => void;
	export let supabase;

	const dispatch = createEventDispatcher();

	const login = async () => {
		dispatch('login', { username: 'loggedInUser' });
	};
</script>

<ModalHeader>Login In</ModalHeader>

<ModalBody>
	<Container class="p-3">
		<Row class="mb-1"><Input placeholder="Email" type="text" bind:value={email} /></Row>
		<Row><Input placeholder="Password" type="password" bind:value={password} /></Row>
	</Container>
</ModalBody>
<ModalFooter>
	<Button size="sm" color="secondary" on:click={() => dispatch('showSignUp')}>Sign Up</Button>
	<Button size="sm" color="secondary" outline on:click={toggleModal}>Cancel</Button>
	<Button size="sm" color="primary" on:click={login}>Login</Button>
</ModalFooter>
