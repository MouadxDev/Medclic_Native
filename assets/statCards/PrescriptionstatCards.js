import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const PrescriptionstatIcon = (props) => (
  <Svg
     

    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Rect width={30} height={30} x={0.211} y={0.941} fill="#FF717F" rx={15} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M15.21 10.274v5.667h4.25m4.25 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
    />
  </Svg>
)
export default PrescriptionstatIcon
