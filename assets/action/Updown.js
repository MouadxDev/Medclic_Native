import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UpdownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.17 13.436 7.585 7.67 2 13.436"
    />
  </Svg>
)
export default UpdownIcon
