import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const UserIcon = (props) => (
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
      d="M25.342 23.5c-1.168 0-2.168-.417-3.002-1.25-.832-.833-1.248-1.833-1.248-3 0-1.17.417-2.17 1.248-3.003.833-.832 1.833-1.247 3.002-1.247 1.17 0 2.17.415 3.002 1.247.832.832 1.248 1.834 1.248 3.003 0 1.168-.416 2.168-1.248 3-.832.832-1.832 1.249-3.002 1.25Zm-9.916 10.242v-2.33c0-.585.17-1.131.51-1.64.34-.51.799-.906 1.374-1.188a20.092 20.092 0 0 1 4.013-1.442 17.184 17.184 0 0 1 4.02-.482c1.34 0 2.68.161 4.018.482 1.339.321 2.676.802 4.012 1.442a3.42 3.42 0 0 1 1.375 1.187c.34.51.511 1.056.511 1.64v2.333l-19.833-.002Zm1.416-1.416h17v-.916c0-.313-.1-.608-.303-.885a2.456 2.456 0 0 0-.841-.7 17.943 17.943 0 0 0-3.607-1.297 15.787 15.787 0 0 0-7.497 0c-1.24.3-2.441.733-3.607 1.297-.359.191-.64.424-.841.7a1.476 1.476 0 0 0-.304.887v.914Zm8.5-10.243a2.73 2.73 0 0 0 2.002-.833 2.723 2.723 0 0 0 .832-2c0-.78-.277-1.447-.832-2.002a2.721 2.721 0 0 0-2.002-.832c-.779 0-1.445.278-2 .832a2.734 2.734 0 0 0-.833 2.002c0 .779.278 1.446.833 2a2.736 2.736 0 0 0 2 .833Z"
    />
  </Svg>
)

export default UserIcon
