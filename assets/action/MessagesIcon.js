import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MessagesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#333"
      d="M10.158 17.417A7.917 7.917 0 1 0 2.24 9.5c0 1.267.298 2.464.826 3.525.14.282.187.604.106.91l-.471 1.761a1.03 1.03 0 0 0 1.26 1.26l1.762-.471c.305-.077.629-.04.91.105a7.883 7.883 0 0 0 3.524.827Z"
    />
    <Path
      stroke="#333"
      strokeLinecap="round"
      d="M6.991 8.313h6.333m-6.333 2.77h4.354"
    />
  </Svg>
)
export default MessagesIcon
