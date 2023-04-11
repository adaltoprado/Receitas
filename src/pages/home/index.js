import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Home Page
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    }
})