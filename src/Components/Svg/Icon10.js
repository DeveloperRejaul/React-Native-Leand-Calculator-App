import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function Icon10(props) {
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
      <Path
        d="M1092 1147l-132-133 51-49c59-58 71-78 63-99-13-34-58-18-114 39l-54 55-53-52-52-52 59-62c33-34 60-67 60-72 0-14-28-42-42-42-5 0-38 27-72 60l-62 59-52-51-51-52 59-62c33-34 60-67 60-72 0-14-28-42-42-42-5 0-38 27-72 60l-62 59-52-51-51-52 59-62c59-62 67-85 36-106-19-13-27-9-90 52l-62 59-52-52-52-53 55-54c57-56 73-101 39-114-21-8-41 4-99 63l-49 51-133-132C60 115 0 48 0 40 0 0 3 0 640 0c466 0 619 3 628 12s12 162 12 628c0 637 0 640-40 640-8 0-75-60-148-133zm-68-503c24-23 24-365 0-388-23-24-365-24-388 0-9 8-16 21-16 27 0 16 361 377 377 377 6 0 19-7 27-16z"
        transform="matrix(.1 0 0 -.1 0 128)"
        fill={ColorsName.SVGICON || `rgba(16,67,96,${props.opacity})`}
      />
    </Svg>
  );
}
