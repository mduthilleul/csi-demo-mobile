import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { useApi } from '../../hooks/useApi';
import { useInput } from '../../hooks/useInput';
import { useInputContext } from '../../contexts/InputContext';
import { Link, Redirect, router } from 'expo-router';
import { MyText } from '../../components/MyText';

export const COLORS = {
  primary: '#FFD700',
  secondary: '#FF0000',
  background: '#000000',
}


export default function App() {

  const {title, onPress} =  useApi()
  const {input} = useInputContext()
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MyText style={{fontSize: 40, color: COLORS.primary}} >{title}</MyText>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
