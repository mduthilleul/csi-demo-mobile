import { SplashScreen, Tabs } from "expo-router";
import { InputProvider } from "../contexts/InputContext";
import { usePoppinsFont } from "../hooks/usePoppinsFont";
import AppLoading from "expo-app-loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppLayout() {
  SplashScreen.preventAutoHideAsync();
  const fontLoaded = usePoppinsFont();
  if (fontLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView>
      <InputProvider>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{ title: "Index", headerShown: false }}
          />
          <Tabs.Screen
            name="test/index"
            options={{ title: "Test", headerShown: false }}
          />
        </Tabs>
      </InputProvider>
    </GestureHandlerRootView>
  );
}
