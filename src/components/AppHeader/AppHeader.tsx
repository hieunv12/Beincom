import {BackIcon} from '@assets';
import {AppText} from '@components';
import {goBack} from '@navigation';
import {Colors, FontSize, Spacing} from '@theme';
import React from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface IAppHeader {
  title?: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  isBack?: boolean;
  backIconColor?: string;
  IconLeft?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  IconRight?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  styleIconLeft?: StyleProp<ViewStyle>;
  iconLeftFillColor?: string;
  onPressBtnLeft?: () => void;
  onPressRight?: () => void;
  styleTextRight?: StyleProp<TextStyle>;
  styleBtnRight?: StyleProp<ViewStyle>;
  colorBackIcon?: string;
  titleRight?: string;
}

export const AppHeader = (props: IAppHeader) => {
  const {
    title,
    styleContainer,
    styleTitle,
    isBack,
    styleIconLeft,
    IconLeft,
    iconLeftFillColor,
    onPressBtnLeft,
    onPressRight,
    IconRight,
    styleTextRight,
    styleBtnRight,
    colorBackIcon = 'black',
    titleRight,
  } = props;

  // const {themeColor} = useTheme();

  const onGoBack = () => {
    goBack();
  };

  const renderLeft = () => {
    return (
      <View style={styles.left}>
        {isBack ? (
          <TouchableOpacity
            onPress={onPressBtnLeft ?? onGoBack}
            hitSlop={styles.hint}
            style={styles.btnLeft}>
            <BackIcon />
          </TouchableOpacity>
        ) : (
          IconLeft && (React.isValidElement(IconLeft) ? IconLeft : null)
        )}
      </View>
    );
  };

  const renderRight = () => {
    return (
      <View style={styles.right}>
        {IconRight && (React.isValidElement(IconRight) ? IconRight : null)}
      </View>
    );
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: Colors.primary,
        },
        styleContainer,
      ]}
      onPressIn={() => Keyboard.dismiss()}
      activeOpacity={1}>
      {renderLeft()}
      {title && (
        <AppText style={[styles.title, {color: Colors.white}, styleTitle]}>
          {title}
        </AppText>
      )}
      {renderRight && renderRight()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    minHeight: Spacing.width35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.width16,
    paddingVertical: Spacing.height15,
  },
  title: {
    fontSize: FontSize.Font18,
    alignItems: 'center',
    fontWeight: '500',
  },
  left: {
    width: Spacing.width20,
  },
  right: {
    width: Spacing.width20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
  },
  btnRight: {
    paddingLeft: Spacing.height10,
  },
  btnLeft: {
    paddingRight: Spacing.height10,
  },
  hint: {top: 25, bottom: 25, left: 25, right: 25},
});
