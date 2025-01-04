import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlusIconFigma = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="M7.481 1.601v11.667M1.648 7.434h11.667"
    />
  </Svg>
)
export default PlusIconFigma
