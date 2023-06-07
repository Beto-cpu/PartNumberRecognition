import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { DEVICE_WIDTH, wp } from '../Utils/ResponsiveLayout';
import { FONTS } from '../Utils/Fonts';
import { COLORS } from '../Utils/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const InputField = ({
  placeholder = 'input',
  containerStyle,
  fieldStyle,
  secureTextEntry,
  useFieldState = [null, null]
}) => {
  const [ state, setState ] = useFieldState;

  return (
    <View
      activeOpacity={0.8}
      style={[styles.container, containerStyle]}
    >
      <TextInput style={[styles.fieldStyle]} placeholder={placeholder} placeholderTextColor={"#FFF"} secureTextEntry={secureTextEntry} value={state} onChangeText={setState}/>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH - 48,
    height: 52,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.WHITE
  },
  fieldStyle: {
    fontSize: wp(22),
    color: COLORS.WHITE
  }
});
