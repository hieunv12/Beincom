import {FontSize, FontWithBold} from '@assets';
import {Colors, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: Spacing.width16,
    height: '100%',
  },
  coverImage: {
    width: '100%',
    height: Spacing.width200,
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
  viewRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.width16,
  },
  btnDelete: {
    backgroundColor: '#FEF3F6',
    borderRadius: Spacing.width8,
    padding: Spacing.width8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.width16,
  },
  txtDelete: {
    color: '#EA1347',
    fontSize: FontSize.Font14,
    ...FontWithBold.Bold_600,
  },
});
