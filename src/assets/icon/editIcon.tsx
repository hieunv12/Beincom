// PlusIcon.js
import {iconProps} from '@assets';
import React from 'react';
import {Svg, Line, Path} from 'react-native-svg';

const EditIcon = (props: iconProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11.084 2.833H9.25c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417h5.5c4.584 0 6.417-1.834 6.417-6.417v-1.833"
      stroke="#717D84"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.703 3.768L8.48 10.992c-.275.275-.55.815-.605 1.21L7.48 14.96c-.147.999.559 1.696 1.558 1.558l2.76-.394c.384-.055.925-.33 1.21-.605l7.223-7.223c1.246-1.247 1.833-2.695 0-4.529-1.834-1.833-3.282-1.246-4.529 0zM14.668 4.804a6.549 6.549 0 004.528 4.529"
      stroke="#717D84"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditIcon;
