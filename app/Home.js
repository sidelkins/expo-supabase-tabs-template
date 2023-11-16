import { Link, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
            title: 'Home',
            headerShown: false
        }}
      />
      <Text>Home</Text>
    </View>
  );
}