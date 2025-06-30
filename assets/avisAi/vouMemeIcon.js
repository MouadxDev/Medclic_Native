import * as React from "react"
import Svg, { Path } from "react-native-svg"
const vouMemeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20.999 19.833a8.167 8.167 0 1 0 0-16.333 8.167 8.167 0 0 0 0 16.333Zm0-14a5.833 5.833 0 1 1 0 11.667 5.833 5.833 0 0 1 0-11.667ZM35.547 28.432a20.02 20.02 0 0 0-29.085 0 2.333 2.333 0 0 0-.63 1.598v6.137A2.333 2.333 0 0 0 8.165 38.5h25.667a2.333 2.333 0 0 0 2.333-2.333V30.03a2.333 2.333 0 0 0-.618-1.598Zm-1.715 7.735H8.165v-6.149a17.699 17.699 0 0 1 25.667 0v6.149Z"
    />
  </Svg>
)

export default vouMemeIcon
