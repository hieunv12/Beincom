import {FontSize, FontWithBold} from '@assets';
import {Colors, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: Spacing.width16,
  },

  title: {
    fontSize: FontSize.Font18,
    ...FontWithBold.Bold_600,
    color: Colors.black,
    marginBottom: Spacing.width16,
  },
  logo: {
    flexDirection: 'row',
  },
  icon: {
    width: Spacing.width32,
    height: Spacing.width32,
  },
  iconAdd: {
    width: Spacing.width77,
    height: Spacing.height30,
    marginLeft: Spacing.width8,
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
  containerInput: {marginBottom: Spacing.width16},
  inputStyle: {},
  inputStyleDescription: {
    height: 100,
    textAlignVertical: 'top',
  },
  btnAdd: {
    minHeight: Spacing.width45,
    borderRadius: Spacing.width8,
  },
});
