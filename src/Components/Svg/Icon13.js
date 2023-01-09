import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function Icon13(props) {
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
        d="M619 1036C296 904 25 789 16 781c-20-17-21-55 0-72 9-7 142-36 297-64l281-51 51-281c28-155 57-288 64-297 18-21 54-20 73 2 16 18 498 1190 498 1210 0 19-38 52-57 51-10-1-282-110-604-243zm501 77c0-10-342-847-350-856-3-4-21 77-39 180-18 104-37 200-42 215-14 35-34 42-251 79-103 18-185 35-183 38 8 8 838 349 853 350 6 1 12-2 12-6z"
        transform="matrix(.1 0 0 -.1 0 128)"
        fill={ColorsName.SVGICON || `rgba(16,67,96,${props.opacity})`}
      />
    </Svg>
  );
}
