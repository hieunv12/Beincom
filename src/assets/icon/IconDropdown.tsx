// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Line, Path} from 'react-native-svg';

const IconDropdown = (props: iconProps) => (
  <Svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 16 16"
    fill="none">
    <Path
      d="M13 6l-5 5-5-5"
      stroke="#717D84"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconDropdown;
