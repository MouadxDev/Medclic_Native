import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"
const Dotes = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G stroke="#1C274C" strokeWidth={0.528}>
      <Path strokeLinecap="round" d="M5 14a2 2 0 1 0-2-2" />
      <Circle cx={12} cy={12} r={2} />
      <Path strokeLinecap="round" d="M21 12a2 2 0 1 1-2-2" />
    </G>
  </Svg>
)
export default Dotes
