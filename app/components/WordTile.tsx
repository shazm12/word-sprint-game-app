import React from 'react'
import { View, StyleSheet,Text } from 'react-native';
import { WordTileProp } from '../interfaces';

const WordTile: React.FC<WordTileProp> = ({ word }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.wordText}>{word}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#F9F9E0",
        minWidth: 100,
        minHeight: 60,
        width: "auto",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#240A34",
        justifyContent: "center",
        alignItems: "center"
    },
    wordText: {
        fontSize: 35
    }
});

export default WordTile;
