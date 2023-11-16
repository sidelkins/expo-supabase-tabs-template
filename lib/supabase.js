import 'react-native-url-polyfill/auto' // Without this import, you will get an error
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js'

// Option 1: Hardcoding
const supabaseUrl = '<YOUR_SUPABASE_URL>';
const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>';

// Option 2: Environment Variables
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

/* 
  Resources used:
  https://blog.iamstarcode.com/authentication-in-react-native-with-expo-router-2-and-supabase#heading-expo-router-2
  https://www.youtube.com/watch?v=6IzrH-1M0uE
  https://dev.to/aaronksaunders/expo-router-supabase-authentication-flow-and-tab-navigation-54co
*/