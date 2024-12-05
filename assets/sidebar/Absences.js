import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Absences = (props) => (
  <Svg
    width={19}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#6C87AE"
      d="M18.852 12.53a.61.61 0 0 1-.13.385.41.41 0 0 1-.316.159h-3.562a.41.41 0 0 1-.315-.16.61.61 0 0 1-.13-.383c0-.144.046-.283.13-.384a.409.409 0 0 1 .315-.16h3.562c.118 0 .232.058.315.16.084.101.13.24.13.384Zm-4.261 5.444c.04.055.07.118.089.187a.655.655 0 0 1-.025.422.54.54 0 0 1-.11.17.429.429 0 0 1-.155.102.369.369 0 0 1-.346-.042.484.484 0 0 1-.135-.14c-1.522-2.21-3.616-3.427-5.893-3.427-2.278 0-4.371 1.218-5.894 3.427a.421.421 0 0 1-.3.18.396.396 0 0 1-.319-.126.63.63 0 0 1-.063-.753c1.168-1.695 2.642-2.865 4.275-3.428-.965-.627-1.73-1.628-2.175-2.846a7.195 7.195 0 0 1-.277-3.875C3.527 6.532 4.139 5.384 5 4.563c.861-.82 1.923-1.266 3.016-1.266 1.092 0 2.154.446 3.015 1.266.861.82 1.473 1.969 1.737 3.262a7.196 7.196 0 0 1-.277 3.875c-.444 1.218-1.21 2.22-2.175 2.846 1.633.563 3.107 1.733 4.275 3.428ZM8.016 14.16c.792 0 1.567-.287 2.226-.824.66-.537 1.173-1.3 1.476-2.194a5.892 5.892 0 0 0 .228-2.824c-.154-.948-.536-1.819-1.096-2.503-.561-.683-1.275-1.149-2.053-1.337a3.343 3.343 0 0 0-2.315.278c-.732.37-1.358.996-1.799 1.8a5.68 5.68 0 0 0-.675 2.716c0 1.296.424 2.538 1.175 3.455.751.916 1.77 1.431 2.833 1.433Z"
    />
  </Svg>
)
export default Absences
