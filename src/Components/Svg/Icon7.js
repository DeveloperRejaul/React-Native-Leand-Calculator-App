import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function Icon7(props) {
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
          d="M180 1099c-22-28-40-54-40-59 0-13 79-110 90-110 22 0 20 23-5 55l-26 35h305c169 0 306-3 306-7s-10-17-21-29c-21-22-21-54 0-54 10 0 91 98 91 110s-81 110-91 110c-21 0-21-32 0-54 11-12 21-25 21-29s-137-7-306-7H199l26 35c25 32 27 55 5 55-5 0-28-23-50-51zM146 854c-3-9-6-172-6-363 0-257 3-350 12-359 15-15 695-17 718-2 13 8 15 60 18 348 2 212-1 349-7 365l-11 27H511c-318 0-360-2-365-16zm694-359V160H180v670h660V495zM1001 819c-28-22-51-45-51-50 0-21 32-21 54 0 12 11 25 21 29 21s7-137 7-306V179l-35 27c-27 20-39 24-47 16-14-14 5-38 63-78l39-27 39 27c58 40 77 64 63 78-8 8-20 4-47-16l-35-27v305c0 169 3 306 7 306s17-10 29-21c22-21 54-21 54 0 0 10-98 91-110 91-4 0-30-18-59-41z"
          transform="matrix(.1 0 0 -.1 0 128)"
        />
      </G>
    </Svg>
  );
}
