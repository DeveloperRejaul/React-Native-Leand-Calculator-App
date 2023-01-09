import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import ColorsName from '../../Constents/ColorsName.js';

export default function icon(props) {
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
          d="M67 1212l-68-68 26-24c24-23 25-23 45-5s20 17 22-501l3-519 519-3 519-2-18-20c-18-20-18-21 6-45l24-25 68 68 67 68-65 64-65 64-27-26c-26-27-26-28-8-48l18-20H170v963l20-18c20-18 21-18 48 8l27 27-65 65-65 65-68-68z"
          transform="matrix(.1 0 0 -.1 0 128)"
        />
        <Path
          d="M480 1051L295 944V476l185-108c102-59 192-107 200-107s98 49 200 108l185 107v468l-189 108c-103 59-193 108-200 107-6 0-94-49-196-108zm338-51c72-41 132-77 132-80s-61-41-135-84l-135-78-135 78c-74 43-135 80-135 83 1 7 263 160 271 158 3-1 65-36 137-77zM505 773l135-78V533c0-90-2-163-5-163s-66 35-140 77l-135 77v163c0 90 2 163 5 163 4 0 66-35 140-77zm495-82V531l-27-19c-35-24-240-142-247-142-4 0-6 73-6 163v163l133 76c72 42 135 77 140 77 4 1 7-71 7-158z"
          transform="matrix(.1 0 0 -.1 0 128)"
        />
      </G>
    </Svg>
  );
}
