import { ScrollView } from "react-native";

import { Stack } from "expo-router";

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "Firebase" }} />
      <ScrollView style={{ flex: 1 }}></ScrollView>
    </>
  );
}
