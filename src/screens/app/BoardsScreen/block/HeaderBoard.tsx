import {PlusIcon} from '@assets';
import {AppHeader, AppModal, IconLogoApp, IconLogoTextApp} from '@components';
import {Colors, Shadow, Spacing} from '@theme';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BoardForm from '../../BoardForm/BoardForm';
import {BoardInterface} from '@interfaces';
export interface HeaderBoardProps {
  // Props type definition
  currentBoard: BoardInterface | null;
  setCurrentBoard: (board: BoardInterface | null) => void;
}

export function HeaderBoard(props: HeaderBoardProps) {
  const {currentBoard, setCurrentBoard} = props;
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (!modalVisible) {
      setCurrentBoard(null);
    }
  }, [modalVisible]);
  useEffect(() => {
    if (currentBoard && !modalVisible) {
      setModalVisible(true);
    }
  }, [currentBoard]);
  return (
    <View>
      <AppHeader
        styleContainer={{backgroundColor: Colors.white, ...Shadow.normal}}
        IconLeft={
          <View style={styles.logo}>
            <IconLogoApp style={styles.icon} />
            <IconLogoTextApp style={styles.iconAdd} />
          </View>
        }
        IconRight={
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            // style={styles.iconRight}
          >
            <PlusIcon
              width={Spacing.width30}
              height={Spacing.width30}
              iconFillColor={Colors.primary}
            />
          </TouchableOpacity>
        }
      />
      <AppModal
        isVisible={modalVisible}
        styleContainer={styles.modalContainer}
        closeModal={() => setModalVisible(false)}>
        <BoardForm
          existingBoard={currentBoard}
          onClose={() => setModalVisible(false)}
        />
      </AppModal>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
