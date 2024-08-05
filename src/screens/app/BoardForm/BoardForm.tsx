// src/components/BoardForm.tsx
import {AppButton, AppInput, AppText} from '@components';
import {zodResolver} from '@hookform/resolvers/zod';
import {addBoard, updateBoard} from '@redux';
import {boardSchema} from '@schemas';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {BoardInterface} from '@interfaces';
import {showAlertMessage} from '@utils';
interface BoardFormProps {
  existingBoard?: BoardInterface | null;
  onClose: () => void;
}

const BoardForm: React.FC<BoardFormProps> = ({existingBoard, onClose}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isDirty},
  } = useForm({
    defaultValues: existingBoard || {name: '', description: ''},
    resolver: zodResolver(boardSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    if (existingBoard) {
      dispatch(updateBoard({...existingBoard, ...data}));
    } else {
      dispatch(addBoard({id: Date.now().toString(), ...data}));
    }
    showAlertMessage(
      existingBoard ? 'Board updated successfully' : 'Board added successfully',
    );
    reset();
    onClose();
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <AppText style={styles.title}>
        {existingBoard ? 'Edit Board' : 'Add Board'}
      </AppText>
      <Controller
        name="name"
        control={control}
        render={({field: {onChange, value}}) => (
          <AppInput
            label="Name"
            placeholder="Please enter board name"
            value={value}
            style={styles.containerInput}
            inputStyle={styles.inputStyle}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({field: {onChange, value}}) => (
          <AppInput
            label="Description"
            placeholder="Please enter board description"
            value={value || ''}
            onChangeText={onChange}
            multiline
            style={styles.containerInput}
            inputStyle={styles.inputStyleDescription}
            error={errors.description?.message}
          />
        )}
      />
      <AppButton
        style={styles.btnAdd}
        disabled={!isDirty}
        label={existingBoard ? 'Edit Board' : 'Add Board'}
        onPress={handleSubmit(onSubmit)}
      />
    </KeyboardAwareScrollView>
  );
};

export default BoardForm;
