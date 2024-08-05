import {FontWithBold} from '@assets';
import {Colors, FontSize, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerSearch: {
    marginTop: Spacing.width16,
  },
  inputSearch: {
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: FontSize.Font18,
    ...FontWithBold.Bold_800,
    color: Colors.black,
    opacity: 0.8,
    marginVertical: Spacing.width12,
  },
});
