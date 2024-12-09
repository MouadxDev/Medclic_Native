import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const ReclamationstatIcon = (props) => (
  <Svg
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Rect width={30} height={30} x={0.544} y={0.941} fill="#4CB7FD" rx={15} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12.602 13.98a.327.327 0 1 1-.654 0 .327.327 0 0 1 .654 0Zm0 0h-.327m3.596 0a.327.327 0 1 1-.654 0 .327.327 0 0 1 .654 0Zm0 0h-.327m3.596 0a.327.327 0 1 1-.654 0 .327.327 0 0 1 .654 0Zm0 0h-.327M7.044 16.602c0 1.396.98 2.61 2.36 2.814.947.139 1.905.246 2.87.321v4.049l3.648-3.647a.993.993 0 0 1 .678-.29 42.12 42.12 0 0 0 5.084-.433c1.38-.203 2.36-1.418 2.36-2.814v-5.247c0-1.396-.98-2.611-2.36-2.814a42.19 42.19 0 0 0-6.14-.447c-2.085 0-4.136.152-6.14.447-1.38.203-2.36 1.418-2.36 2.814v5.247Z"
    />
  </Svg>
)
export default ReclamationstatIcon
