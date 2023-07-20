import {
  Dimensions,
  TextInput,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Food from "../services/Food";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "expo-router";

// const {width, height} = Dimensions.get('window')

const Welcome = () => {

    const nav = useNavigation()

    const route = () => {
        try{
            nav.navigate('Home');
            console.log('done')
    }
    catch(err){
        console.log(err)
    }
        } 
  return (
    <ImageBackground style={{ backgroundColor: "white" }}>
      {/*Top view */}
      <View style={styles.header}>
        <Image
          source={require("../assets/welcome1.jpg")}
          style={styles.image}
        />
      </View>
      {/*Bottom view */}
      <View style={styles.details}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.input}></TextInput>
          <TextInput placeholder="Password" style={styles.input1}></TextInput>
        </View>
        <View
          style={{
            backgroundColor: "black",
            marginTop: 60,
            height: "10%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            marginHorizontal: "24%",
          }}
        >
          <TouchableOpacity activeOpacity={0.1}>
            <Text style={styles.title}>Register</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "black",
            marginTop: 10,
            height: "10%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            marginHorizontal: "24%",
          }}
        >
          <TouchableOpacity activeOpacity={0.1} onPress={route}>
            <Text style={styles.title}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  image: {
    height: "100%",
    width: "100%",
    // borderBottomRightRadius: 120,
  },
  details: {
    backgroundColor: "white",
    height: "40%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    top: -300,
  },
  inputContainer: {
    marginTop: 55,
    marginHorizontal: 40,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  input1: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
