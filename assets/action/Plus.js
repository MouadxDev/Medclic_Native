import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#FDFDFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12m-6-6v12"
    />
  </Svg>
)
export default PlusIcon
