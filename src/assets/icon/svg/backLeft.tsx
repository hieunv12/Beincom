// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Path} from 'react-native-svg';

const BackIcon = (props: iconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
