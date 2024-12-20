import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SuiviIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#333"
      d="M6.908 5a.625.625 0 0 1 .625-.625h10a.625.625 0 0 1 0 1.25h-10A.625.625 0 0 1 6.908 5Zm10.625 4.375h-10a.625.625 0 0 0 0 1.25h10a.625.625 0 1 0 0-1.25Zm0 5h-10a.625.625 0 1 0 0 1.25h10a.625.625 0 1 0 0-1.25ZM4.095 4.062a.937.937 0 1 0 0 1.875.937.937 0 0 0 0-1.875Zm0 5a.937.937 0 1 0 0 1.875.937.937 0 0 0 0-1.874Zm0 5a.938.938 0 1 0 0 1.876.938.938 0 0 0 0-1.876Z"
    />
  </Svg>
)
export default SuiviIcon
