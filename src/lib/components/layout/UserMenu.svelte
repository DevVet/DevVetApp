<script lang="ts">
	import { signOut } from '$lib/utils/auth';
	import type { User } from '@supabase/supabase-js';
	import { Image } from 'sveltestrap';

	export let user: User;

	const handleSignOut = async () => {
		signOut();
	};
</script>

<div on:click={handleSignOut}>
	<Image
		fluid
		thumbnail
		style="max-height: 50px; cursor: pointer; position: absolute; top: 16px; right: 16px;"
		class="rounded-circle border-0"
		src={user.user_metadata.avatar_url}
		on:click={handleSignOut}
	/>
</div>
