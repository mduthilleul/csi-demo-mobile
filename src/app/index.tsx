import { ScrollView, Text } from "react-native";

import { Stack } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import {
  Unsubscribe,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";

export default function App() {
  const [text, setText] = useState("");

  const unsubscribeRef = useRef<Unsubscribe>();

  useEffect(() => {
    const getUsers = async () => {
      const usersCollection = collection(firestore, "users");
      const usersQuery = query(usersCollection);

      unsubscribeRef.current = onSnapshot(usersQuery, (snapshot) => {
        const names = snapshot.docs
          .map((doc) => {
            return doc.data().name;
          })
          .join(", ");

        setText(names);
      });
      return () => {
        unsubscribeRef.current?.();
      };
    };
    getUsers();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Firebase" }} />
      <Text>Mon text: {text}</Text>
    </>
  );
}
