import {Colors} from '@theme';
import React from 'react';
import PropTypes from 'prop-types';

import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
export interface AppModalProps {
  isVisible: boolean;
  styleContainer?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean;
  closeModal?: () => void;
  children?: React.ReactNode;
}

export function AppModal(props: AppModalProps) {
  const {
    isVisible,
    style,
    styleContainer,
    closeModal,
    avoidKeyboard,
    children,
  } = props;
  return (
    <Modal
      style={[styles.container, styleContainer]}
      isVisible={isVisible}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      avoidKeyboard={avoidKeyboard}
      onBackdropPress={() => {
        if (closeModal) {
          closeModal();
        }
      }}>
      <View style={[styles.viewBody, style]}>{children}</View>
    </Modal>
  );
}
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 0,
  },
  viewBody: {
    backgroundColor: Colors.white,
  },
});
