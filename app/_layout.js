import { Tabs } from 'expo-router/tabs';
import { SessionProvider, useSession } from '../lib/AuthContext';

export default function AppLayout() {
  return (
    <SessionProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
      </Tabs>
    </SessionProvider>
  );
}