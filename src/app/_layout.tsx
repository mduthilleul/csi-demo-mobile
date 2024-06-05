import { Tabs } from 'expo-router';
import { InputProvider } from '../contexts/InputContext';
import { usePoppinsFont } from '../hooks/usePoppinsFont';
import AppLoading from 'expo-app-loading';

export default function AppLayout() {
  const fontLoaded = usePoppinsFont()
  if(!fontLoaded) return <AppLoading />
  
  return (
      <InputProvider>
        <Tabs>
            <Tabs.Screen  name="index" options={{title: 'Index', headerShown: false}} />
            <Tabs.Screen  name="test/index" options={{title: 'Test', headerShown: false}} />
        </Tabs>
      </InputProvider>
  );
}