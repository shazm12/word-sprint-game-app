import { Stack, useNavigation, router } from "expo-router";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import LinearGradBg from "./components/LinearGradBg";
import { UserContext } from "./contexts/userContext";

const Home = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const {user ,setUser} = userContext;

  const fling = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((event) => {
      if (isUsernameValid) {
        setUser({ ...user, name: username });
        router.push("/game");
      }
    })
    .runOnJS(true);


  const checkIfUserNameIsValid = (text: string) => {
    setUsername(text);
    const regex: RegExp = /^[a-zA-Z_]{3,}$/;

    if (regex.test(text)) setIsUsernameValid(true);
    else setIsUsernameValid(false);
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    opacityAnim.setValue(0);
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isUsernameValid, opacityAnim]);

  useEffect(() => {
    const bounce = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );
    bounce.start();
  }, [bounceAnim]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <LinearGradBg />
        <View style={styles.title}>
          <Image
            style={styles.titleImage}
            source={require("../assets/word_sprint_logo_final.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={checkIfUserNameIsValid}
            value={username}
            placeholder="Eg. Adele"
          />
        </View>
        <View
          style={{
            display: username !== "" ? "flex" : "none",
            width: 250,
            marginTop: 40,
            marginLeft: isUsernameValid ? 80 : 20,
          }}
        >
          <Animated.Text
            style={[
              isUsernameValid ? styles.successText : styles.errorText,
              { opacity: opacityAnim },
            ]}
          >
            {isUsernameValid
              ? "Swipe down to start"
              : "Username must be at least 3 letters long, contain only letters, and only _ is allowed as special characters."}
          </Animated.Text>
          <GestureDetector gesture={fling}>
            <Animated.Image
              source={require("../assets/down-arrow.png")}
              style={{
                display: isUsernameValid ? "flex" : "none",
                marginLeft: 60,
                marginTop: 10,
                height: 40,
                width: 40,
                transform: [{ translateY: bounceAnim }],
              }}
            />
          </GestureDetector>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginTop: 160,
  },
  titleImage: {},
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#240A34",
    fontSize: 20,
    padding: 10,
    width: 160,
    backgroundColor: "#F9F9E0",
  },
  usernameValidText: {},
  errorText: {
    color: "#E4003A",
    fontSize: 18,
  },
  successText: {
    color: "#508D4E",
    fontSize: 18,
  },
});

export default Home;
