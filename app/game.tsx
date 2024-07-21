import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LinearGradBg from './components/LinearGradBg';
import { UserContext } from './contexts/userContext';
import WordListTiles from './components/WordListTiles';
import { TextInput } from 'react-native-gesture-handler';
import { generateAvatarURL } from './api/avatarGen';


const game = () => {

  const [guessedWord, setGuessedWord] = useState("");
  const [loading, setLoading ] = useState(false);
  const [counter, setCounter ]=  useState(0);
  const [guessedWords, setGuessedWords] = useState<Array<string>>(["","","","",""]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const {user ,setUser} = userContext;


  const onGuess = () => {
    if(guessedWord.trim() && guessedWords.includes("")) {
      setGuessedWords((prevWords) => {
        const updatedWords = [...prevWords];
        const emptyIndex = updatedWords.indexOf("");
        if(emptyIndex !== -1) {
          updatedWords[emptyIndex] = guessedWord.trim();
          setCounter((prevValue) => prevValue+1);
        }
        return updatedWords;
      })
    }
    setGuessedWord("");
  }

  useEffect(() => {
    setLoading(true);
    setAvatarUrl(generateAvatarURL());
    setLoading(false);
  },[]);
  

  return (
    loading ? 
    (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
         <LinearGradBg />
        <Text>Loading</Text>
      </View>
    ):
    (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <LinearGradBg />
            <View style={styles.userInfoContainer}>
              <Image style={{ height: 40, width: 40}} source={{ uri: avatarUrl }} alt='avatar' />
              <Text style={styles.userNameText}>{user?.name || "User"}</Text>
            </View>
            <WordListTiles words={guessedWords} />
            <TextInput
              value={guessedWord}
              onChangeText={setGuessedWord}
              style={styles.input}
              placeholder='Start Typing Words...'
            />
            <TouchableOpacity style={styles.guessBtn} onPress={onGuess}>
              <Text style={styles.guessBtnText}>Guess</Text>
            </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    )
  )
}

export default game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    userInfoContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 100,
    },
    userNameText: {
      fontSize: 25,
      marginLeft: 20
    },
    input: {
      marginTop: 40,
      backgroundColor: "#F9F9E0",
      height: 50,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#240A34",
      fontSize: 20,
      padding: 10,
      width: 300,

    },

    guessBtn: {
      marginTop: 25,
      backgroundColor: "#416D19",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: "#114232",
      borderRadius: 5
      
    },
    guessBtnText: {
      fontSize: 25,
      color: "#F9F9E0"
    }
})