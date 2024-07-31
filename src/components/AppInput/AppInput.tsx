import React, {useState} from 'react';
import {Box, Colors, Spacing, Theme, useTheme} from '@theme';
import {
  KeyboardTypeOptions,
  Pressable,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewProps,
} from 'react-native';
import {styles} from './styles';
import {AppText} from '../AppText';
// import {SpacingProps, TypographyProps} from '@shopify/restyle';
import {Eye, EyeActive} from '@assets';
// import MaskInput, {MaskInputProps} from 'react-native-mask-input';
import {StyleProp} from 'react-native';

export interface appInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  touched?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  isMasked?: boolean;
}

export function AppInput(props: appInputProps & ViewProps) {
  const {
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    maxLength,
    keyboardType,
    error,
    touched,
    labelStyle,
  } = props;
  const [isFocus, setFocus] = useState(false);
  const [isPrivateText, setSecureTextEntry] = useState(secureTextEntry);
  const {themeColor} = useTheme();

  return (
    <Box style={styles.viewWidth} {...props}>
      {!!label && (
        <AppText marginBottom={'m'} style={labelStyle}>
          {label}
        </AppText>
      )}
      <Box justifyContent={'center'}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPrivateText}
          placeholder={placeholder}
          style={[
            styles.inputStyle,
            {color: themeColor.textColor},
            isFocus && styles.btnActive,
            secureTextEntry && {paddingRight: Spacing.width50},
          ]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          maxLength={maxLength}
          keyboardType={keyboardType}
          autoCapitalize="none"
          placeholderTextColor={themeColor.placeHolderColor}
          clearButtonMode="while-editing"
          textContentType="newPassword"
        />
        {!!error && !!touched && (
          <AppText
            variant={'title3'}
            fontSize={11}
            style={{color: Colors.lightRed}}
            marginTop="sm">
            {error}
          </AppText>
        )}
        {!!secureTextEntry && (
          <Box position={'absolute'} right={10}>
            <Pressable
              onPress={() => {
                setSecureTextEntry(prv => !prv);
              }}>
              {isPrivateText ? <Eye /> : <EyeActive />}
            </Pressable>
          </Box>
        )}
      </Box>
    </Box>
  );
}
