import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
   
    
    width={19}
    height={19}
    fill="none"
  {...props}
  >
    <Path
      stroke="#6C87AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M6.515 7.61h-3.28a1.814 1.814 0 0 0-1.829 1.8v6.808a1.814 1.814 0 0 0 1.83 1.798h3.279a1.814 1.814 0 0 0 1.829-1.799V9.41a1.814 1.814 0 0 0-1.83-1.799ZM6.515.673h-3.28a1.78 1.78 0 0 0-1.829 1.726V3.57a1.78 1.78 0 0 0 1.83 1.727h3.279A1.78 1.78 0 0 0 8.344 3.57V2.4A1.78 1.78 0 0 0 6.514.673ZM12.485 11.079h3.278a1.815 1.815 0 0 0 1.83-1.8V2.473a1.814 1.814 0 0 0-1.828-1.8h-3.28a1.814 1.814 0 0 0-1.829 1.8V9.28a1.814 1.814 0 0 0 1.83 1.799ZM12.485 18.016h3.278a1.78 1.78 0 0 0 1.83-1.726v-1.172a1.78 1.78 0 0 0-1.828-1.727h-3.28a1.78 1.78 0 0 0-1.829 1.727v1.17a1.78 1.78 0 0 0 1.83 1.728Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
