import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function Icon5(props) {
  return (
    <Svg
      style={{
        position: 'absolute',
        bottom: props.bottom,
        right: props.right,
        top: props.top,
        left: props.left,
      }}
      width={props.size ? props.size : '40'}
      height={props.size ? props.size : '40'}
      viewBox="0 0 128 128"
      {...props}>
      <G fill={ColorsName.SVGICON || `rgba(16,67,96,${props.opacity})`}>
        <Path
          d="M551 1269c-129-25-257-125-313-245-60-128-61-255-4-380 28-60 359-598 386-628 11-11 25-16 36-12 23 8 364 576 401 667 130 321-162 666-506 598zm188-80c93-21 188-99 236-196 33-65 45-183 26-260-7-30-77-158-184-335-94-158-172-286-173-285s-77 124-170 272c-92 149-176 294-187 324-60 175 21 371 186 455 84 42 159 49 266 25z"
          transform="matrix(.1 0 0 -.1 0 128)"
        />
        <Path
          d="M545 1031c-171-79-166-333 7-405 48-20 128-20 176 0 176 73 176 335 0 408-50 21-134 20-183-3zm165-70c106-56 102-215-6-266-105-49-224 36-211 151 12 106 123 166 217 115z"
          transform="matrix(.1 0 0 -.1 0 128)"
        />
      </G>
    </Svg>
  );
}
