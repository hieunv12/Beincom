import {FontWithBold, IconDropdown} from '@assets';
import {AppText} from '@components';
import {Box, Colors, FontSize, Spacing} from '@theme';
import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
export interface AppDropdownProps {
  value?: string;
  onChangeText?: (date: string) => void;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  error?: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  data: {label: string; value: string}[];
}

export function AppDropdown(props: AppDropdownProps) {
  const {
    value = '',
    onChangeText,
    placeholder,
    label,
    labelStyle,
    error,
    data = [],
  } = props;
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownHeight = useRef(new Animated.Value(0)).current;
  const toggleDropdown = () => {
    if (isDropdownVisible) {
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setDropdownVisible(false));
    } else {
      setDropdownVisible(true);
      Animated.timing(dropdownHeight, {
        toValue: 150, // Adjust this value based on the number of items
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleSelect = (item: {label: string; value: string}) => {
    setSelectedValue(item.value);
    toggleDropdown();
    if (onChangeText) {
      onChangeText(item.value);
    }
  };
  return (
    <View style={styles.container}>
      <Box style={styles.viewWidth} {...props}>
        {!!label && (
          <AppText numberOfLines={1} style={[styles.txtLabel, labelStyle]}>
            {label}
          </AppText>
        )}
        <TouchableOpacity
          onPress={toggleDropdown}
          style={[styles.inputStyle, props.inputStyle]}>
          <AppText style={[styles.txtValue, !value && {opacity: 0.3}]}>
            {data?.find(elm => elm.value === selectedValue)?.label ||
              placeholder ||
              'Select an option'}
          </AppText>

          <IconDropdown />
        </TouchableOpacity>
        {!!error && (
          <AppText style={{color: Colors.lightRed, marginTop: Spacing.width12}}>
            {error}
          </AppText>
        )}
        {isDropdownVisible && (
          <Animated.View style={[styles.dropdown, {height: dropdownHeight}]}>
            <FlatList
              data={data}
              keyExtractor={item => item.value}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    item.value === selectedValue && {
                      backgroundColor: Colors.primary,
                      opacity: 0.8,
                    },
                  ]}
                  onPress={() => handleSelect(item)}>
                  <AppText
                    style={[
                      styles.dropdownItemText,
                      item.value === selectedValue && {
                        color: Colors.white,
                        ...FontWithBold.Bold_600,
                      },
                    ]}>
                    {item.label}
                  </AppText>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        )}
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  inputStyle: {
    height: Spacing.height48,
    minHeight: 48,
    paddingHorizontal: Spacing.width15,
    borderWidth: 1,
    borderRadius: Spacing.width8,
    borderColor: `${Colors.borderColor}`,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtValue: {
    color: `${Colors.black2}`,
    ...FontWithBold.Bold_400,
  },
  txtLabel: {
    fontSize: FontSize.Font14,
    ...FontWithBold.Bold_600,
    color: `${Colors.black2}`,
    marginBottom: Spacing.width4,
  },
  viewWidth: {width: '100%'},
  dropdown: {
    position: 'absolute',
    top: Spacing.height75, // Adjust this value based on your input height
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: Spacing.width8,
    // marginTop: Spacing.width4,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    zIndex: 100,
  },
  dropdownItem: {
    paddingVertical: Spacing.width16,
    paddingHorizontal: Spacing.width16,
  },
  dropdownItemText: {
    fontSize: FontSize.Font14,
    color: Colors.black,
  },
});
