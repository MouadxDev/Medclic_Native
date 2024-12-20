import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FDFDFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="M3.658 6.607h10m-12.5-5h15m-10 10h5"
    />
  </Svg>
)
export default FilterIcon
