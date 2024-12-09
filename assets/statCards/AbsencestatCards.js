import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const AbsencestatIcon = (props) => (
  <Svg
     
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Rect width={30} height={30} x={0.877} y={0.941} fill="#FFB62C" rx={15} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M10.647 23.133h10.461m-6.538-2.615v2.615m2.615-2.615v2.615m-8.827-2.615h15.038a.98.98 0 0 0 .981-.98V9.728a.98.98 0 0 0-.98-.98H8.357a.98.98 0 0 0-.98.98v9.808c0 .542.438.98.98.98Z"
    />
  </Svg>
)
export default AbsencestatIcon
