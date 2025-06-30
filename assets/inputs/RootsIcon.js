import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const RootsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Rect
      width={24}
      height={24}
      x={0.57}
      y={0.061}
      fill="#3A8EF6"
      fillOpacity={0.2}
      rx={3}
    />
    <Path
      fill="#1678F2"
      d="M18.078 8.31a1.757 1.757 0 1 0-2.11 1.723v.621a1.055 1.055 0 0 1-1.054 1.055h-4.219c-.38 0-.75.123-1.054.352v-2.028a1.758 1.758 0 1 0-.704 0v4.055a1.758 1.758 0 1 0 .704 0v-.621a1.054 1.054 0 0 1 1.054-1.055h4.22a1.758 1.758 0 0 0 1.757-1.758v-.62a1.76 1.76 0 0 0 1.406-1.723Zm-9.844 0a1.055 1.055 0 1 1 2.11 0 1.055 1.055 0 0 1-2.11 0Zm2.11 7.5a1.054 1.054 0 1 1-2.109 0 1.054 1.054 0 0 1 2.109 0Zm5.976-6.445a1.054 1.054 0 1 1 0-2.108 1.054 1.054 0 0 1 0 2.108Z"
    />
  </Svg>
)
export default RootsIcon
