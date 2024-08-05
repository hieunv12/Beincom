// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Path} from 'react-native-svg';

const CloseIcon = (props: iconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      d="M18.75 5.25l-13.5 13.5M18.75 18.75L5.25 5.25"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CloseIcon;
