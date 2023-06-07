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
const HomeScreen = ({ route, navigation }) => {
  const [partsArray, setPartsArray] = useState([]);

// Navigation to the home screen
const buttonClickHandler = () => {    
  navigation.navigate("ImageScreen", { partsArray: partsArray });
};

const checkboxHandler1 = (isChecked) => {
  let filteredArray = partsArray.filter(item => item !== "T1W");
  if (isChecked) filteredArray.push("T1W");

  setPartsArray(filteredArray);
};

const checkboxHandler2 = (isChecked) => {
  let filteredArray = partsArray.filter(item => item !== "XNF");
  if (isChecked) filteredArray.push("XNF");

  setPartsArray(filteredArray);
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Pieces</Text>
        <DataTable style = {styles.table}>
          <DataTable.Header>
            <DataTable.Title>Selected</DataTable.Title>
            <DataTable.Title style={styles.grownCell}>Part Number</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>
              <BouncyCheckbox label="Item" status="checked" onPress={checkboxHandler1}/>
            </DataTable.Cell>
            <DataTable.Cell style={styles.grownCell}>T1W</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>
              <BouncyCheckbox label="Item" status="checked" onPress={checkboxHandler2}/>
            </DataTable.Cell>
            <DataTable.Cell style={styles.grownCell}>XNF</DataTable.Cell>
          </DataTable.Row>
              
        </DataTable>
        
        <Button
          title={"Next"}
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          onPress={buttonClickHandler}
        />
      </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;

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
