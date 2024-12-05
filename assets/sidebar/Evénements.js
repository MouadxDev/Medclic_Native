import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Evénements = (props) => (
  <Svg
     
    width={20}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#6C87AE"
      d="m8.659 18.032-2.738-2.538.69-.64 2.048 1.9 4.06-3.765.69.64-4.75 4.403ZM2 21.034V6.824h3.243v-1.98h1.032v1.98h6.854v-1.98h.958v1.98h3.243v14.21H2Zm.958-.888h13.414V11.81H2.958v8.335Zm0-9.223h13.414v-3.21H2.958v3.21Z"
    />
  </Svg>
)
export default Evénements
