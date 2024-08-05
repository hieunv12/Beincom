import {FontSize, FontWithBold} from '@assets';
import {Colors, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  listStatusContainer: {
    flexGrow: 1,
    // backgroundColor: 'red',
    marginTop: Spacing.width16,
    paddingHorizontal: Spacing.width16,
    gap: Spacing.width16,
  },
  addStatus: {
    backgroundColor: Colors.primary,
    width: Spacing.width220,
    padding: Spacing.width16,
    borderRadius: Spacing.width8,
    alignItems: 'center',
  },
  txtStatus: {
    color: Colors.white,
    fontSize: FontSize.Font16,
    ...FontWithBold.Bold_600,
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
});
