import React from 'react';
import colors from '../../styles/colors';
import { SVGIconProps } from './types';

export default function ArrowUpIcon({ active }: SVGIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.83545 10.8359L12.8354 6.83594L16.8354 10.8359"
        stroke={active ? colors.lightBlue.primary : 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8354 6.83594L12.8354 17.165"
        stroke={active ? colors.lightBlue.primary : 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
