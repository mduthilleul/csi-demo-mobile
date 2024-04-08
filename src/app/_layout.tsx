import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs>
        <Tabs.Screen  name="index" options={{title: 'Index', headerShown: false}} />
        <Tabs.Screen  name="test/index" options={{title: 'Test'}} />
    </Tabs>
  );
}