import type { Provider } from '@supabase/gotrue-js';
import supabase from './supabase';

export enum AuthProvider {
	DISCORD = 'discord',
	GITHUB = 'github',
	GOOGLE = 'google'
}

export const loginWithEmail = async (email: string, password: string): Promise<void> => {
	const { error } = await supabase.auth.signIn({ email, password });
	if (error) console.error(error);
};

export const signInProvider = async (provider: Provider): Promise<void> => {
	const { error } = await supabase.auth.signIn({
		provider
	});
	if (error) console.error(error);
};

export const signOut = async (): Promise<void> => {
	const { error } = await supabase.auth.signOut();
	if (error) console.error(error);
};

export const signUp = async (email: string, password: string): Promise<void> => {
	const { error } = await supabase.auth.signUp({
		email,
		password
	});
	if (error) console.error(error);
};
