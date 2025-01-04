import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Messagetriger = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#3D8CEF"
      strokeWidth={1.5}
      d="M14.836 26.727c6.674 0 12.084-5.41 12.084-12.083 0-6.674-5.41-12.084-12.084-12.084-6.673 0-12.083 5.41-12.083 12.084 0 1.933.454 3.76 1.26 5.38.215.43.287.922.162 1.388l-.719 2.69a1.57 1.57 0 0 0 1.923 1.923l2.69-.72c.466-.118.96-.06 1.388.16a12.032 12.032 0 0 0 5.38 1.262Z"
    />
    <Path
      stroke="#3D8CEF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.003 12.831h9.667m-9.667 4.23h6.646"
    />
  </Svg>
)
export default Messagetriger
