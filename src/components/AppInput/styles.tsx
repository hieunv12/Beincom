import {FontWithBold} from '@assets';
import {Colors, FontSize, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputStyle: {
    height: Spacing.height55,
    minHeight: 48,
    paddingHorizontal: Spacing.width15,
    borderWidth: 1,
    borderRadius: Spacing.width8,
    borderColor: `${Colors.borderColor}`,
    color: `${Colors.black2}`,
  },
  btnActive: {
    borderColor: `${Colors.primary}`,
  },
  txtLabel: {
    fontSize: FontSize.Font14,
    ...FontWithBold.Bold_600,
    color: `${Colors.black2}`,
    marginBottom: Spacing.width4,
  },

  viewWidth: {width: '100%'},
});
