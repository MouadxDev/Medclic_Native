import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const ObIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={45}
    fill="none"
    {...props}
  >
    <Rect width={47.633} height={45} fill="#3D8CEF" fillOpacity={0.1} rx={18} />
    <Path
      stroke="#3D8CEF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M32.79 27.508v-12.09A2.424 2.424 0 0 0 30.368 13h-9.69a2.424 2.424 0 0 0-2.422 2.418v12.09a2.424 2.424 0 0 0 2.422 2.418h9.69a2.424 2.424 0 0 0 2.422-2.418Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#3D8CEF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18.02 15.944-2.427.883a2.42 2.42 0 0 0-1.447 3.098l4.142 11.361a2.418 2.418 0 0 0 2.171 1.589c.318.013.635-.035.934-.144l6.744-2.658M21.89 19.045h6.055m-6.055 2.418h7.266m-7.266 2.418h3.633"
    />
  </Svg>
)
export default ObIcon
