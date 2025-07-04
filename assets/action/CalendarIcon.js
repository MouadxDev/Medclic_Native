import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

const CalendarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32"
    />
    <Rect
      width={160}
      height={64}
      x={176}
      y={32}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={26.13}
      ry={26.13}
    />
  </Svg>
)
export default CalendarIcon
