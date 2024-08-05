// src/components/StatusForm.tsx
import {FontWithBold} from '@assets';
import {AppButton, AppInput} from '@components';
import {zodResolver} from '@hookform/resolvers/zod';
import {StatusInterface} from '@interfaces';
import {addStatus, updateStatus} from '@redux';
import {statusSchema} from '@schemas';
import {Colors, FontSize, Spacing} from '@theme';
import {showAlertMessage} from '@utils';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

interface StatusFormProps {
  existingStatus?: StatusInterface | null;
  onClose: () => void;
}

const StatusForm: React.FC<StatusFormProps> = ({existingStatus, onClose}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isDirty},
  } = useForm({
    defaultValues: existingStatus || {name: ''},
    resolver: zodResolver(statusSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    if (existingStatus) {
      dispatch(updateStatus({...existingStatus, ...data}));
    } else {
      dispatch(addStatus({id: Date.now().toString(), ...data}));
    }
    showAlertMessage(
      existingStatus
        ? 'Status updated successfully'
        : 'Status added successfully',
    );
    reset();
    onClose();
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Controller
        name="name"
        control={control}
        render={({field: {onChange, value}}) => (
          <AppInput
            label="Name"
            placeholder="Please enter status name"
            value={value}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />
      <AppButton
        style={styles.btnAdd}
        disabled={!isDirty}
        label={existingStatus ? 'Edit Board' : 'Add Board'}
        onPress={handleSubmit(onSubmit)}
      />
    </KeyboardAwareScrollView>
  );
};

export default StatusForm;
const styles = StyleSheet.create({
  container: {
    padding: Spacing.width16,
  },

  title: {
    fontSize: FontSize.Font18,
    ...FontWithBold.Bold_600,
    color: Colors.black,
    marginBottom: Spacing.width16,
  },
  btnAdd: {
    minHeight: Spacing.width45,
    borderRadius: Spacing.width8,
    marginTop: Spacing.width16,
  },
});
