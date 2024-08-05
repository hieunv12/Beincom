// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Line, Circle} from 'react-native-svg';

const DotsHorizontalIcon = (props: iconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none">
    <Circle cx="5" cy="12" r="1.5" fill="#868A8D" />
    <Circle cx="12" cy="12" r="1.5" fill="#868A8D" />
    <Circle cx="19" cy="12" r="1.5" fill="#868A8D" />
  </Svg>
);

export default DotsHorizontalIcon;
