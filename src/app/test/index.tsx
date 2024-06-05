import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { MySection } from "../../components/MySection";
import { useInput } from "../../hooks/useInput";
import { useInputContext } from "../../contexts/InputContext";
import { Stack } from "expo-router";

const SECTIONS = [
  {
    title: "Section",
    content: "Hello World !",
  },
  {
    title: "Section2",
    content: "Hello World 2 !",
  },
];

export default function App() {
  const {input, setInput} = useInputContext()

  useEffect(() => {
    console.log("Do request !")
  }, [])
 

  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 10, borderColor: "blue" }}>
      <ScrollView style={{ flex: 1 }}>
        {SECTIONS.map((section, index) => (
          <MySection key={index} title={section.title}>
            <Text>{section.content}</Text>
          </MySection>
        ))}
        <MySection title="Input">
          <Text style={styles.label}>Input: {input}</Text>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
          />
        </MySection>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  input: {
    fontSize: 20,
    color: "black",
    borderWidth: 5,
    borderRadius: 100,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});
