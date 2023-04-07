import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  // jsx -> renderizar componentes (interface)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Meu primeiro app React Native
        <Nome nome="Adalto" />

        <Nome nome="Letícia" />

        <Nome nome="Yurick" />

      </Text>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 400
  },
  title: {
    fontSize: 24,
    marginTop: 100
  }

})

function Nome({ nome }) {
  return (
    <Text>
      Olá {nome}
    </Text>
  )
}