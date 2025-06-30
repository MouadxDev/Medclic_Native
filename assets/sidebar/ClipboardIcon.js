
import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ClipboardIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <Path stroke="#6C87AE" strokeLinecap="round" d="M4.48 14.153h4.526" />
    <Path
      stroke="#6C87AE"
      d="M5.303 2.222c0-.681.553-1.234 1.235-1.234h4.114c.681 0 1.234.553 1.234 1.234v.823c0 .682-.553 1.234-1.234 1.234H6.538a1.234 1.234 0 0 1-1.235-1.234v-.823Z"
    />
    <Path
      stroke="#6C87AE"
      strokeLinecap="round"
      d="M16 12.508c0 2.327 0 3.49-.723 4.213-.723.724-1.887.724-4.214.724H6.126c-2.327 0-3.49 0-4.214-.724-.723-.722-.723-1.886-.723-4.213v-2.469m10.697-7.404c1.79.01 2.759.09 3.391.722C16 4.08 16 5.243 16 7.57v1.645M5.303 2.636c-1.79.01-2.759.089-3.39.72-.633.633-.712 1.602-.722 3.392M4.48 11.273h.823m5.76 0H7.772"
    />
  </Svg>
)
export default ClipboardIcon
