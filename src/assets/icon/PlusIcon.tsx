// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Line} from 'react-native-svg';

const PlusIcon = (props: iconProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.iconFillColor || 'white'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Line x1="12" y1="5" x2="12" y2="19" />
    <Line x1="5" y1="12" x2="19" y2="12" />
  </Svg>
);

export default PlusIcon;
