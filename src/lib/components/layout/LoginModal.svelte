<script lang="ts">
	import { AuthProvider, loginWithEmail, signInProvider } from '$lib/utils/auth';
	import { faDiscord, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { createEventDispatcher } from 'svelte';
	import Fa from 'svelte-fa';
	import { Button, Container, Input, ModalBody, ModalFooter, ModalHeader, Row } from 'sveltestrap';

	let email, password: string;

	export let toggle: () => void;

	const dispatch = createEventDispatcher();

	const handleLogin = async (provider?: AuthProvider): Promise<void> => {
		provider ? await signInProvider(provider) : await loginWithEmail(email, password);
		dispatch('login');
	};
</script>

<ModalHeader>Login</ModalHeader>

<ModalBody>
	<Container class="p-3">
		<Row class="mb-1"><Input placeholder="Email" type="text" bind:value={email} /></Row>
		<Row><Input placeholder="Password" type="password" bind:value={password} /></Row>
		<Row class="justify-content-end my-2">
			<Button size="sm" color="secondary" on:click={() => dispatch('showSignUp')}>Sign Up</Button>
			<Button size="sm" color="primary" on:click={() => handleLogin()}>Login</Button>
		</Row>
	</Container>
</ModalBody>
<ModalFooter>
	<Container class="justify-content-center">
		<Row class="justify-content-center">Or Login With</Row>
		<Row class="justify-content-around px-5">
			<Button
				outline
				color="secondary"
				class="border-0"
				on:click={() => handleLogin(AuthProvider.DISCORD)}><Fa icon={faDiscord} size="2x" /></Button
			>
			<Button
				outline
				color="secondary"
				class="border-0"
				on:click={() => handleLogin(AuthProvider.GOOGLE)}><Fa icon={faGoogle} size="2x" /></Button
			>
			<Button
				outline
				color="secondary"
				class="border-0"
				on:click={() => handleLogin(AuthProvider.GITHUB)}><Fa icon={faGithub} size="2x" /></Button
			>
		</Row>
	</Container>
</ModalFooter>
