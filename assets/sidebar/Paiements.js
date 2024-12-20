import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Paiements = (props) => (
  <Svg
     
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#6C87AE"
      d="M16.25 3.906H3.75a1.719 1.719 0 0 0-1.719 1.719v8.75a1.719 1.719 0 0 0 1.719 1.719h12.5a1.718 1.718 0 0 0 1.719-1.719v-8.75a1.719 1.719 0 0 0-1.719-1.719ZM2.969 7.344H17.03v1.562h-3.97a1.094 1.094 0 0 0-1.07.876 2.031 2.031 0 0 1-3.985 0 1.094 1.094 0 0 0-1.068-.876h-3.97V7.344Zm.781-2.5h12.5a.781.781 0 0 1 .781.781v.781H2.97v-.781a.781.781 0 0 1 .781-.781Zm12.5 10.312H3.75a.781.781 0 0 1-.781-.781V9.844h3.97a.156.156 0 0 1 .156.124 2.969 2.969 0 0 0 5.818 0 .156.156 0 0 1 .153-.124h3.965v4.531a.781.781 0 0 1-.781.781Z"
    />
  </Svg>
)
export default Paiements
