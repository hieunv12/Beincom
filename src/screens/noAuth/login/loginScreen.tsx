import {AppButton, AppInput, AppText} from '@components';
import {setAccountToken} from '@redux';
import {Box, MARGIN_TOP, rootStyle} from '@theme';
import {showAlertMessage} from '@utils';
import {useFormik} from 'formik';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (values: {email: string; password: string}) => {
    if (values.email !== 'Mint' || values.password !== 'Mint') {
      showAlertMessage('Lỗi đăng nhập', 'warning');
    } else {
      dispatch(setAccountToken('MINT'));
    }
  };

  const {values, errors, touched, setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleOnSubmit,
  });

  return (
    <KeyboardAwareScrollView contentContainerStyle={rootStyle.container} />
  );
};
