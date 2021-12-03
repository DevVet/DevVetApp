<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Container, Input, ModalBody, ModalFooter, ModalHeader, Row } from 'sveltestrap';

	let email, password: string;
	const dispatch = createEventDispatcher();

	export let toggleModal: () => void;
	export let supabase;

	const signUp = async (): Promise<void> => {
		// const { user, error } = await supabase.auth.signUp({
		// 	email,
		// 	password
		// });
		dispatch('signUp', { username: 'newSignUpUser' });
	};
</script>

<ModalHeader>Sign Up</ModalHeader>
<ModalBody>
	<Container class="p-3">
		<Row class="mb-1"><Input placeholder="Email" type="text" bind:value={email} /></Row>
		<Row><Input placeholder="Password" type="password" bind:value={password} /></Row>
	</Container>
</ModalBody>
<ModalFooter>
	<Button size="sm" color="secondary" outline on:click={toggleModal}>Cancel</Button>
	<Button size="sm" color="primary" on:click={signUp}>Sign Up</Button>
</ModalFooter>
