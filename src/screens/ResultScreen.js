import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { FONTS } from "../Utils/Fonts";
import { hp, wp } from "../Utils/ResponsiveLayout";
import { useNavigation } from "@react-navigation/core";
import { COLORS } from "../Utils/Colors";
import { DataTable } from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from "../Component/Button";


const { height } = Dimensions.get('window');
const ResultScreen = ({ route, navigation }) => {
  var { image, partsArray } = route.params;
  image = image.split("|")

  // navigation to home screen 
  const buttonClickHandler = () => {
    navigation.navigate("ImageScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Results</Text>

        <DataTable style = {styles.table}>
          <DataTable.Header>
            <DataTable.Title style={styles.grownCell}>Part Number</DataTable.Title>
          </DataTable.Header>


          {
            partsArray?.map((item)=>(
              <DataTable.Row>
                <DataTable.Cell style={[styles.grownCell, (image.includes(item) || { backgroundColor: "#fca5a5" })]}>{item}</DataTable.Cell>
              </DataTable.Row>
            ))
          }
          
              
        </DataTable>
      </View>
      
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ORANGE_COLOR,
    justifyContent: "space-between",
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
  table: {
    backgroundColor: COLORS.WHITE
  },
  grownCell: {
    flex: 5
  },
  button: {
    backgroundColor: COLORS.WHITE,
    marginTop: hp(60)
  },
  buttonText: {
    color: COLORS.GRAY
  }
});
