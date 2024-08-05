import {FontWithBold, IconDate} from '@assets';
import {AppModal, AppText} from '@components';
import {Box, Colors, FontSize, Spacing} from '@theme';
import {FormatDate} from '@utils';
import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export interface AppInputDateProps {
  value?: string;
  onChangeText?: (date: string) => void;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  error?: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}

export function AppInputDate(props: AppInputDateProps) {
  const {
    value = '',
    onChangeText,
    placeholder,
    label,
    labelStyle,
    error,
  } = props;
  const [date, setDate] = useState<string>(value);
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleConfirm = (selectedDate: string) => {
    setDate(selectedDate);
    setPickerVisible(false);
    if (onChangeText) {
      onChangeText(selectedDate);
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
          style={styles.inputStyle}
          onPress={() => setPickerVisible(true)}>
          <AppText style={[styles.txtValue, !date && {opacity: 0.3}]}>
            {date ? FormatDate(date, 'YYYY/MM/DD') : placeholder}
          </AppText>
          <IconDate />
        </TouchableOpacity>
        {!!error && (
          <AppText style={{color: Colors.lightRed, marginTop: Spacing.width12}}>
            {error}
          </AppText>
        )}
      </Box>
      <DatePicker
        modal
        open={isPickerVisible}
        date={date ? new Date(date) : new Date()}
        mode="date"
        onConfirm={newDate => {
          handleConfirm(newDate.toISOString());
        }}
        onCancel={() => {
          setPickerVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  modalContainer: {
    flex: 1,

    borderRadius: Spacing.width8,
    marginHorizontal: Spacing.width16,
    overflow: 'hidden',
  },
  pickerContainer: {},
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
});
