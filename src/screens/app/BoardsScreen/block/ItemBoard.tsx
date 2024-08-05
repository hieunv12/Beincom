import {EditIcon, FontWithBold, SettingsIcon} from '@assets';
import {AppText} from '@components';
import {BoardInterface} from '@interfaces';
import {navigate, SCREEN_ROUTE} from '@navigation';
import {Colors, FontSize, Shadow, Spacing} from '@theme';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
export interface ItemBoardProps {
  item: BoardInterface;
  onEdit: (item: BoardInterface) => void;
}

export function ItemBoard(props: ItemBoardProps) {
  const {item, onEdit} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(SCREEN_ROUTE.TASK_SCREEN, {id: item.id});
      }}
      style={styles.container}>
      <View style={{flex: 1}}>
        <AppText style={styles.title}>{item?.name}</AppText>
        {item.description && (
          <AppText numberOfLines={2} style={styles.description}>
            {item?.description}
          </AppText>
        )}
      </View>
      <TouchableOpacity style={styles.btnEdit} onPress={() => onEdit(item)}>
        <EditIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Spacing.width16,
    marginVertical: Spacing.width8,
    backgroundColor: '#fff',
    borderRadius: Spacing.width4,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },

  title: {
    fontSize: FontSize.Font16,
    ...FontWithBold.Bold_600,
    color: Colors.black,
  },
  description: {
    fontSize: FontSize.Font12,
    ...FontWithBold.Bold_600,
    color: Colors.black,
    opacity: 0.6,
    marginTop: Spacing.width4,
  },
  btnEdit: {
    paddingLeft: Spacing.width16,
  },
});
