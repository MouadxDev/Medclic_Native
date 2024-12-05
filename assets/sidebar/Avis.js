import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Avis = (props) => (
  <Svg
     
    width={23}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6C87AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.066 15.428V4.85a2.114 2.114 0 0 0-2.12-2.116H8.47a2.121 2.121 0 0 0-2.12 2.116V15.43a2.114 2.114 0 0 0 2.12 2.115h8.478a2.121 2.121 0 0 0 2.119-2.116Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#6C87AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.143 5.31-2.124.773a2.118 2.118 0 0 0-1.266 2.711l3.624 9.94a2.116 2.116 0 0 0 1.9 1.39c.278.013.555-.03.817-.125l5.9-2.325M9.53 8.024h5.298M9.53 10.14h6.358m-6.358 2.115h3.179"
    />
  </Svg>
)
export default Avis
