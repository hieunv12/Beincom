// src/screens/TasksScreen.tsx
import {AppButton, AppHeader, AppModal, AppText} from '@components';
import {StatusInterface} from '@interfaces';
import {getStatus} from '@redux';
import {Colors, Shadow} from '@theme';
import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ItemStatus} from './block/ItemStatus';
import {styles} from './styles';
import StatusForm from '../StatusForm/StatusForm';

export const TasksScreen: React.FC = () => {
  const statuses = useSelector(getStatus);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<StatusInterface | null>(
    null,
  );
  const renderItem = useCallback(({item}: {item: StatusInterface}) => {
    return (
      <ItemStatus
        item={item}
        onEdit={() => {
          setCurrentStatus(item);
          setModalVisible(true);
        }}
      />
    );
  }, []);
  const renderAddStatus = useCallback(() => {
    return (
      <AppButton
        style={styles.addStatus}
        label="Add Status"
        onPress={() => setModalVisible(true)}
        labelStyle={styles.txtStatus}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader
        isBack={true}
        styleContainer={{backgroundColor: Colors.white, ...Shadow.normal}}
      />
      <FlatList
        data={statuses}
        keyExtractor={item => `status_${item.id}`}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.listStatusContainer}
        ListFooterComponent={renderAddStatus()}
      />
      <AppModal
        isVisible={modalVisible}
        styleContainer={styles.modalContainer}
        closeModal={() => setModalVisible(false)}>
        <StatusForm
          existingStatus={currentStatus}
          onClose={() => setModalVisible(false)}
        />
      </AppModal>
    </View>
  );
};
