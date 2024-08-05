import {IconDate} from '@assets';
import {AppText} from '@components';
import {DataLevel} from '@constants';
import {taskItemInterface} from '@interfaces';
import {Colors, FontSize, Shadow, Spacing} from '@theme';
import {FormatDate} from '@utils';
import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
export interface ItemTaskProps {
  item: taskItemInterface;
  onEdit: () => void;
}

export function ItemTask(props: ItemTaskProps) {
  const {item, onEdit} = props;

  const itemLevel = useMemo(() => {
    return DataLevel.find(elm => elm.value === item.level);
  }, [item.level]);

  return (
    <TouchableOpacity onPress={onEdit} style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {width: item.progress ? `${item.progress}%` : '0%'},
          ]}
        />
      </View>
      <AppText style={styles.title}>{item.name}</AppText>

      <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
        <View style={styles.viewRow}>
          <IconDate width={Spacing.width14} height={Spacing.width14} />
          <AppText style={styles.date}>{`${FormatDate(
            item.startDate,
            'DD/MM',
          )} - ${FormatDate(item.endDate, 'DD/MM')}`}</AppText>
        </View>
        {item.level && (
          <AppText
            style={[
              styles.txtLever,
              {
                backgroundColor: itemLevel?.color,
                padding: Spacing.width4,
                borderRadius: Spacing.width4,
              },
            ]}>
            {itemLevel?.label}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: Spacing.width4,
    borderRadius: Spacing.width4,
    ...Shadow.normal,
    elevation: 1,
    marginTop: Spacing.width8,
  },
  title: {
    fontSize: FontSize.Font14,
    color: Colors.black,
    marginBottom: Spacing.width4,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: Colors.borderColor,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: Spacing.width4,
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  date: {
    fontSize: FontSize.Font12,
    color: Colors.black,
    opacity: 0.7,
    marginLeft: Spacing.width4,
  },
  txtLever: {
    fontSize: FontSize.Font12,
    color: Colors.white,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
