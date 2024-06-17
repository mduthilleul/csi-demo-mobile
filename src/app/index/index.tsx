import { Image, StyleSheet } from "react-native";
import { useApi } from "../../hooks/useApi";
import { useInputContext } from "../../contexts/InputContext";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { demo } from "../../demo";

export const COLORS = {
  primary: "#FFD700",
  secondary: "#FF0000",
  background: "#000000",
};

export default function App() {
  const { title, onPress } = useApi();
  const { input } = useInputContext();

  useEffect(() => {
    demo()
  }, []);

  return (
    <ScrollView
      minimumZoomScale={0.5}
      maximumZoomScale={2}
      pinchGestureEnabled={true}
    >
      <Image source={require("../../resources/55_logo.png")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
