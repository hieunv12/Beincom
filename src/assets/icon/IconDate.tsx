// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Line, Path} from 'react-native-svg';

const IconDate = (props: iconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      d="M19.5 3.75h-15a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM16.5 2.25v3M7.5 2.25v3M3.75 8.25h16.5"
      stroke="#717D84"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconDate;
