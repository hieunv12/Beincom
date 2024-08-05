import {FontWithBold} from '@assets';
import {AppButton, AppModal, AppText} from '@components';
import {Colors, FontSize, Spacing} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';
export interface AppConfirmDeleteProps {
  title: string;
  description: string;
  onConfirm: () => void;
  visible: boolean;
  onClose: () => void;
}

export function AppConfirmDelete(props: AppConfirmDeleteProps) {
  const {title, description, onConfirm, onClose, visible} = props;

  return (
    <AppModal
      isVisible={visible}
      styleContainer={styles.modalContainer}
      style={styles.modal}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.description}>{description}</AppText>
      <AppButton
        label="Confirm"
        style={styles.btnDelete}
        labelStyle={styles.txtDelete}
        onPress={() => {
          onClose();
          setTimeout(() => {
            onConfirm();
          }, 100);
        }}
      />
      <AppButton
        label="Cancel"
        style={styles.btnCancel}
        labelStyle={styles.txtCancel}
        onPress={() => onClose()}
      />
    </AppModal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    padding: Spacing.width16,
    backgroundColor: 'white',
    borderRadius: Spacing.width8,
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.Font18,
    fontWeight: 'bold',
    marginBottom: Spacing.width8,
    color: Colors.black,
    textAlign: 'center',
  },
  description: {
    marginBottom: Spacing.width16,
    color: '#717584',
    textAlign: 'center',
    width: '80%',
  },

  btnDelete: {
    backgroundColor: '#EA1347',
  },
  txtDelete: {
    color: Colors.white,
    ...FontWithBold.Bold_600,
  },
  btnCancel: {
    backgroundColor: Colors.transparent,
  },
  txtCancel: {
    color: Colors.black,
    ...FontWithBold.Bold_600,
  },
});
