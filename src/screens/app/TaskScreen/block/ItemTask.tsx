import {CloseIcon, FontWithBold, IconDate} from '@assets';
import {AppModal, AppText} from '@components';
import {DataLevel} from '@constants';
import {StatusInterface, taskItemInterface} from '@interfaces';
import {getStatus, updateTask} from '@redux';
import {Colors, FontSize, Shadow, Spacing} from '@theme';
import {FormatDate} from '@utils';
import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
export interface ItemTaskProps {
  item: taskItemInterface;
  onEdit: () => void;
}

export function ItemTask(props: ItemTaskProps) {
  const {item, onEdit} = props;
  const dispatch = useDispatch();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleLongPress = () => {
    setDropdownVisible(true);
  };
  const statuses = useSelector(getStatus);
  const handleStatusChange = (status: StatusInterface) => {
    dispatch(updateTask({...item, status: status.id}));

    setDropdownVisible(false);
  };
  const itemLevel = useMemo(() => {
    return DataLevel.find(elm => elm.value === item.level);
  }, [item.level]);

  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      onPress={onEdit}
      style={[styles.container]}>
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
      {dropdownVisible && (
        <AppModal
          isVisible={dropdownVisible}
          style={styles.modal}
          styleContainer={{justifyContent: 'flex-end'}}
          closeModal={() => setDropdownVisible(false)}>
          <TouchableOpacity
            onPress={() => setDropdownVisible(false)}
            style={styles.btnClose}
            hitSlop={styles.hint}>
            <CloseIcon />
          </TouchableOpacity>
          <FlatList
            data={statuses}
            keyExtractor={item => item.id}
            renderItem={({item: statusItem}) => (
              <TouchableOpacity
                style={[
                  styles.itemStatus,
                  statusItem.id === item.status && {
                    backgroundColor: Colors.gray5,
                  },
                ]}
                onPress={() => handleStatusChange(statusItem)}>
                <AppText style={styles.dropdownItem}>{statusItem.name}</AppText>
              </TouchableOpacity>
            )}
          />
        </AppModal>
      )}
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
  btnClose: {
    alignSelf: 'flex-end',
    padding: Spacing.width16,
  },
  hint: {top: 25, bottom: 25, left: 25, right: 25},

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
  dropdownItem: {
    fontSize: FontSize.Font14,
    color: Colors.black,
    ...FontWithBold.Bold_500,
  },
  modal: {
    borderTopLeftRadius: Spacing.width16,
    borderTopRightRadius: Spacing.width16,
  },
  itemStatus: {
    padding: Spacing.width8,
  },
});
