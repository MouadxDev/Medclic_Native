import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const UserInfoIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Rect width={45} height={45} fill="#3D8CEF" fillOpacity={0.1} rx={18} />
    <Path
      fill="#3D8CEF"
      d="M23 12.64A10.36 10.36 0 1 0 33.36 23 10.371 10.371 0 0 0 23 12.64Zm-5.744 17.47a6.704 6.704 0 0 1 11.488 0 9.12 9.12 0 0 1-11.488 0Zm2.29-7.922a3.453 3.453 0 1 1 6.908 0 3.453 3.453 0 0 1-6.907 0Zm10.107 7.072a7.874 7.874 0 0 0-4.062-3.187 4.673 4.673 0 1 0-5.18 0 7.874 7.874 0 0 0-4.062 3.187 9.14 9.14 0 1 1 13.304 0Z"
    />
  </Svg>
)
export default UserInfoIcon
