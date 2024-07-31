import {ENUM_COLORS, FontWithBold_Barlow, Text, useTheme} from '@theme';
import React from 'react';
import {StyleProp, StyleSheet, TextProps, TextStyle} from 'react-native';
interface AppTextProps {
  width?: number | string;
  height?: number | string;
  color?: ENUM_COLORS;
  style?: StyleProp<TextStyle>;
  children: JSX.Element | string | undefined;
  spacing?: {
    sm: number;
    s: number;
    xs: number;
    m: number;
    l: number;
    xl: number;
  };
  borderRadii?: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  breakpoints?: {
    phone: number;
    tablet: number;
  };
  textVariants?: {
    title1: string;
    title2: string;
    title3: string;
    body: string;
    button: string;
    header: string;
    text: string;
  };
}

export const AppText = (props: AppTextProps & TextProps) => {
  const {style, children, numberOfLines, color} = props;
  const {themeColor} = useTheme();
  return (
    <Text
      {...props}
      style={[styles.label, !color && {color: themeColor.textColor}, style]}
      numberOfLines={numberOfLines}
      color={color}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    ...FontWithBold_Barlow.Bold_Barlow_500,
  },
});
