import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import LinearGradBg from './components/LinearGradBg';

const game = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <LinearGradBg />
            <Text>Game</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})