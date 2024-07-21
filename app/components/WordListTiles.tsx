import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { WordListTilesProps } from '../interfaces';
import WordTile from './WordTile';

const WordListTiles: React.FC<WordListTilesProps> = ({ words }) => {

  return (
    <View style={styles.container}>
      {words.map((word:string,idx: number,) => (
        <WordTile key={idx} word={word} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    gap: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  }
})

export default WordListTiles;