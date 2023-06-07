import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { FONTS } from "../Utils/Fonts";
import Button from "../Component/Button";
import InputField from "../Component/InputField";
import { hp, wp } from "../Utils/ResponsiveLayout";
import { useNavigation } from "@react-navigation/core";
import Loader from "../Component/Loader";
import { COLORS } from "../Utils/Colors";

const LoginScreen = ({ route, navigation }) => {
  // navigation to home screen 
  const buttonClickHandler = () => {
    // Auth Placeholder
    // if(username != "User" || password != "Password") return Alert.alert("Auth Error", "Incorrect username or password");

    navigation.navigate("HomeScreen");
  }

  // States
  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/icon.png")}
        />
        <Text
          style={styles.title}
        >{`WELCOME`}</Text>
        <View style={styles.form}>
          <InputField placeholder="username" useFieldState={[ username, setUsername ]}/>
          <InputField secureTextEntry={true} useFieldState={[ password, setPassword ]} placeholder="password"/>
        </View>
        <Button
          title={"Log In"}
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          onPress={buttonClickHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ORANGE_COLOR,
    justifyContent: "center",
  },
  form: {
    marginBottom: hp(50)
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: wp(36),
    color: COLORS.WHITE,
    textAlign: "center",
    marginHorizontal: wp(24),
    marginVertical: hp(16),
    fontFamily: FONTS.POPPINS_SEMIBOLD,
  },
  text: {
    fontSize: wp(16),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
  },
  sepratorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: hp(20),
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    flex: 1,
    backgroundColor: COLORS.BLACK,
    marginHorizontal: 12,
  },
  button: {
    backgroundColor: COLORS.WHITE,
  },
  buttonText: {
    color: COLORS.GRAY
  }
});
