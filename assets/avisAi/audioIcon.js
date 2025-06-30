import * as React from "react"
import Svg, { Path } from "react-native-svg"
const audioIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      fill="#333"
      d="M20.5 27.867a7.377 7.377 0 0 0 7.367-7.367V10.25a7.367 7.367 0 0 0-14.734 0V20.5a7.377 7.377 0 0 0 7.367 7.367ZM15.055 10.25a5.445 5.445 0 1 1 10.89 0V20.5a5.445 5.445 0 1 1-10.89 0V10.25Zm6.406 22.702v5.486a.96.96 0 1 1-1.922 0v-5.486A12.506 12.506 0 0 1 8.008 20.5a.96.96 0 1 1 1.922 0 10.57 10.57 0 1 0 21.14 0 .961.961 0 0 1 1.922 0 12.506 12.506 0 0 1-11.531 12.452Z"
    />
  </Svg>
)
export default audioIcon
