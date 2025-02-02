import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Animated, StyleProp, ViewStyle} from 'react-native';

import {Dimensions} from 'react-native';
import {Spacing} from '@theme';

const {width, height} = Dimensions.get('window');

export const horizontal = {
  xxSmall: width * 0.0125,
  xSmall: width * 0.025,
  small: width * 0.0375,
  medium: width * 0.05,
  large: width * 0.075,
};

export const vertical = {
  xxSmall: height * 0.0125,
  xSmall: height * 0.025,
  small: height * 0.0375,
  medium: height * 0.05,
  normal: height * 0.065,
  large: height * 0.075,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  pagination: {
    width: horizontal.small,
    height: horizontal.small,
    borderRadius: 25,
    marginHorizontal: horizontal.xSmall,
  },
  normalDot: {
    height: Spacing.width8,
    width: Spacing.width8,
    borderRadius: Spacing.width8 / 2,
    backgroundColor: 'white',
    marginRight: 4,
  },
});
interface PaginationProps {
  size: number;
  scrollX: Animated.Value;
  windowWidth: number;
  paginationStyle?: StyleProp<ViewStyle>;
  renderPagination?: (val: Animated.Value) => JSX.Element;
  dotStyle?: StyleProp<ViewStyle>;
}

export const Pagination = (props: PaginationProps) => {
  const {
    size,
    paginationStyle,
    scrollX,
    windowWidth,
    renderPagination,
    dotStyle,
  } = props;
  if (renderPagination) {
    return renderPagination(scrollX);
  }
  return (
    <Animated.View style={[styles.container, paginationStyle]}>
      {Array.from({length: size}).map((_, index) => {
        const widthScroll = scrollX.interpolate({
          inputRange: [
            windowWidth * (index - 1),
            windowWidth * index,
            windowWidth * (index + 1),
          ],
          outputRange: [Spacing.width8, Spacing.width16, Spacing.width8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange: [
            windowWidth * (index - 1),
            windowWidth * index,
            windowWidth * (index + 1),
          ],
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[styles.normalDot, {width: widthScroll, opacity}, dotStyle]}
          />
        );
      })}
    </Animated.View>
  );
};
Pagination.propTypes = {
  size: PropTypes.number.isRequired,
  paginationIndex: PropTypes.number,
  paginationActiveColor: PropTypes.string,
  paginationDefaultColor: PropTypes.string,
};

Pagination.defaultProps = {
  paginationIndex: 0,
  paginationActiveColor: 'white',
  paginationDefaultColor: 'white',
  paginationStyle: {},
  paginationStyleItem: {},
};
