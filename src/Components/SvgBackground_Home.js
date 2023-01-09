import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ColorsName from '../Constents/ColorsName.js';
import Dimantion from '../Constents/Dimantion.js';

function SvgComponent(props) {
  const viewBox = `0 0 ${Dimantion.WindowWidth} ${Dimantion.WindowHeigth}`;
  return (
    <Svg
      viewBox={viewBox}
      width={Dimantion.WindowWidth}
      height={Dimantion.WindowHeigth}
      style={{
        zIndex: -1,
        elevation: -1,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      {...props}>
      <Path fill={ColorsName.WHITE_02} d="M0 0H392V781H0z" />
      <Path
        d="M0 287l9.3-24.2c9.4-24.1 28-72.5 46.7-90.6 18.7-18.2 37.3-6.2 56-2 18.7 4.1 37.3.5 56 4.1 18.7 3.7 37.3 14.7 56 3.5 18.7-11.1 37.3-44.5 56-60.3 18.7-15.8 37.3-14.2 56 13.3 18.7 27.5 37.3 80.9 46.7 107.5L392 265V0H0z"
        fill={ColorsName.Blue}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
