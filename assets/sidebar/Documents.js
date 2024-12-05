import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Documents = (props) => (
  <Svg
     
    width={20}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6C87AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M17.78 17.808V5.403c0-.658-.215-1.29-.596-1.754-.382-.466-.9-.727-1.439-.727H7.608c-.54 0-1.056.261-1.438.727-.381.465-.596 1.096-.596 1.754v12.405c0 .658.215 1.29.596 1.755.382.465.899.726 1.438.726h8.137c.54 0 1.057-.261 1.439-.727.381-.465.596-1.096.596-1.754Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#6C87AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m5.376 5.943-2.038.905c-.507.225-.92.687-1.147 1.283a2.986 2.986 0 0 0-.068 1.897L5.6 21.685c.091.306.231.587.412.828.18.24.398.434.64.572a1.705 1.705 0 0 0 1.556.082l5.663-2.727M8.626 9.124h5.086m-5.086 2.481h6.103m-6.103 2.482h3.051"
    />
  </Svg>
)
export default Documents
