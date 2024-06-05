import { Button, ImageBackground, StyleSheet, View } from "react-native";

export type MyButtonProps = {
    title: string;
    onPress: () => void;
}

export const MyButton = ({onPress, title}: MyButtonProps) => {
  return (
    <View style={styles.container}>
      <Button testID="title" title={title} color="red" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    borderWidth: 10,
    borderColor: "green",
    backgroundColor: "yellow",
    borderRadius: 200,
  },
});
