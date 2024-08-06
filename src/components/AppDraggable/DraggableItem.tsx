import React, {useRef, useState, ReactNode} from 'react';
import {View, StyleSheet, PanResponder} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

interface DraggableItemProps {
  children: ReactNode;
  onDrop: (x: number, y: number, itemId: string) => void;
  itemId: string;
  key?: string;
  onDragStart: (itemId: string) => void;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({
  children,
  onDrop,
  itemId,
  key,
  onDragStart,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {
        runOnJS(onDragStart)(itemId);
      },
      onActive: event => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
      },
      onEnd: event => {
        runOnJS(onDrop)(event.absoluteX, event.absoluteY, itemId);
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      },
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.draggable, animatedStyle]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
    // <Animated.View
    //   key={key}
    //   style={[
    //     pan.getLayout(),
    //     styles.draggableItem,
    //     isDragging && styles.dragging,
    //   ]}
    //   {...panResponder.panHandlers}>
    //   {children}
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  draggable: {
    zIndex: 1000,
  },
  draggableItem: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
    backgroundColor: 'green',
  },
  dragging: {
    opacity: 0.7,
  },
});
