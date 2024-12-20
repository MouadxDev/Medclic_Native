import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const SexIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={47}
    fill="none"
    {...props}
  >
    <Rect width={50.016} height={47} fill="#3D8CEF" fillOpacity={0.1} rx={4} />
    <Path
      fill="#3D8CEF"
      d="M32.903 11h-4.687a.703.703 0 0 0 0 1.406h2.99l-3.515 3.509a7.266 7.266 0 1 0-5.803 12.394v2.378H18.84a.703.703 0 0 0 0 1.407h3.047v3.047a.703.703 0 0 0 1.406 0v-3.047h3.047a.703.703 0 1 0 0-1.407h-3.047V28.31A7.265 7.265 0 0 0 28.6 17l3.6-3.6v2.99a.703.703 0 0 0 1.406 0v-4.687a.703.703 0 0 0-.703-.703ZM22.591 26.938a5.86 5.86 0 1 1 5.86-5.86 5.866 5.866 0 0 1-5.86 5.86Z"
    />
  </Svg>
)

export default SexIcon
