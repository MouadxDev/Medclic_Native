import * as React from "react"
import Svg, { Path } from "react-native-svg"
const procheIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.142 16.714a6.429 6.429 0 1 0 0-12.857m6.429 30.857h5.143v-1.393a11.597 11.597 0 0 0-9-11.181m-12.857-5.426a6.429 6.429 0 1 0 0-12.857 6.429 6.429 0 0 0 0 12.857Zm-11.572 18h23.143v-1.393a11.597 11.597 0 0 0-12.096-11.464A11.597 11.597 0 0 0 1.285 33.321v1.393Z"
    />
  </Svg>
)
export default procheIcon
