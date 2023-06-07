import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, CameraRoll  } from "react-native";
import { FONTS } from "../Utils/Fonts";
import { hp, wp } from "../Utils/ResponsiveLayout";
import { useNavigation } from "@react-navigation/core";
import { COLORS } from "../Utils/Colors";
import { DataTable,Checkbox } from "react-native-paper";
import Button from "../Component/Button";

import * as ImagePicker from 'expo-image-picker';



const { height } = Dimensions.get('screen');

const ImageScreen = ({ route, navigation }) => {
  const { partsArray } = route.params;
  const [selectedImage, setSelectedImage] = useState(null);

  // navigation to home screen 
  useEffect(()=>{
    if (!selectedImage) return;

    const parts = selectedImage.split("/");
    const lastPart = parts.pop();
    navigation.navigate("ResultScreen", {image: lastPart, partsArray: partsArray});
  },[selectedImage])
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Image</Text>
        <View style={styles.secondary_container}>
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <Image
              source={require('../../assets/camera.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        
        {/* <Button
          title={"Next"}
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          onPress={nextButtonClickHandler}
        /> */}
      </View>
      
    </SafeAreaView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.ORANGE_COLOR,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(10),
    minHeight: height
  },
  title: {
    fontSize: wp(36),
    color: COLORS.WHITE,
    textAlign: "center",
    marginHorizontal: wp(24),
    marginVertical: hp(16),
    fontFamily: FONTS.POPPINS_SEMIBOLD,
    marginTop: hp(40)
  },
  secondary_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 20
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  grownCell: {
    flex: 5
  },
  button: {
    backgroundColor: COLORS.WHITE,
    marginTop: hp(60),
  },
  buttonText: {
    color: COLORS.GRAY
  }
});
