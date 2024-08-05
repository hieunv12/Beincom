import React from 'react';
import {
  Animated,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {AppText} from '../AppText';
import {Colors, FontSize, Spacing} from '@theme';
import {goBack} from '@navigation';
import {BackIcon, CloseIcon, FontWithBold} from '@assets';
export interface ScrollableHeaderScreenProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClose?: () => void;
}
const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export function ScrollableHeaderScreen(props: ScrollableHeaderScreenProps) {
  const {children, style, onClose} = props;
  const scrollY = new Animated.Value(0);
  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [Colors.transparent, Colors.white],
    extrapolate: 'clamp',
  });
  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.header,
          {height: Spacing.height40, backgroundColor: headerBackgroundColor},
        ]}>
        <TouchableOpacity
          onPress={() => {
            if (onClose) {
              onClose();
            } else {
              goBack();
            }
          }}
          hitSlop={styles.hint}
          style={styles.btnLeft}>
          <CloseIcon />
        </TouchableOpacity>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: Spacing.width16}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {children}
      </Animated.ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection: 'row',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 18,
  },
  hint: {top: 25, bottom: 25, left: 25, right: 25},
  btnLeft: {},
  txtSave: {
    color: Colors.primary,
    fontSize: FontSize.Font16,
    ...FontWithBold.Bold_600,
  },
});
