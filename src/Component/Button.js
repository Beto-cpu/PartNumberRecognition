import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DEVICE_WIDTH, wp } from '../Utils/ResponsiveLayout';
import { FONTS } from '../Utils/Fonts';
import { COLORS } from '../Utils/Colors';

const Button = ({
  title = 'button',
  buttonStyle,
  buttonTextStyle,
  mode = 'solid',
  onPress,
}) => {
  const containerStyle = [
    styles.container,
    buttonStyle,
  ];

  const textStyle = [
    styles.buttonText,
    buttonTextStyle,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={containerStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH - 48,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: wp(16),
    fontFamily: FONTS.POPPINS_SEMIBOLD,
  },
});
