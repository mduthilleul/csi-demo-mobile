import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export type MySectionProps = {
    title: string;
    // children: React.ReactNode;
}

export const MySection = ({title, children}: PropsWithChildren<MySectionProps>) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Titre: {title}</Text>
          {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 20,
      borderWidth: 10,
      borderColor: "red",
      justifyContent: "center",
      gap: 20,
    },
    text: {
      fontSize: 30,
    },
  });
  