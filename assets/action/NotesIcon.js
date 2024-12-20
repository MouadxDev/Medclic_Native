import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NotesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#333"
      d="M6.62 11.282a.616.616 0 0 0 .45-.192.615.615 0 0 0 .191-.45.616.616 0 0 0-.192-.45.617.617 0 0 0-.45-.19.616.616 0 0 0-.45.192.616.616 0 0 0-.191.45c0 .171.064.321.191.449.128.128.278.19.45.19Zm0-2.308a.616.616 0 0 0 .45-.191.615.615 0 0 0 .191-.45.616.616 0 0 0-.192-.45.616.616 0 0 0-.45-.191.616.616 0 0 0-.45.191.616.616 0 0 0-.191.45c0 .173.064.323.191.45a.616.616 0 0 0 .45.192m0-2.308a.616.616 0 0 0 .45-.192.616.616 0 0 0 .192-.45.615.615 0 0 0-.192-.45.616.616 0 0 0-.45-.19.616.616 0 0 0-.45.19.616.616 0 0 0-.191.45c0 .173.064.323.191.45.128.128.278.192.45.192Zm2.565 4.391h3.557v-.833H9.183v.833Zm0-2.308h6.057v-.833H9.183v.833Zm0-2.308h6.057v-.834H9.183v.834Zm-6.026 10.29V3.846c0-.384.128-.704.386-.96.256-.257.576-.386.96-.386h12.308c.383 0 .703.129.96.386.257.256.386.576.386.96v8.975c0 .383-.129.703-.385.96a1.306 1.306 0 0 1-.961.386H5.722l-2.564 2.565Zm2.208-3.399h11.446a.491.491 0 0 0 .352-.16.492.492 0 0 0 .16-.352V3.846a.492.492 0 0 0-.16-.353.492.492 0 0 0-.352-.16H4.504a.492.492 0 0 0-.353.16.492.492 0 0 0-.16.353v10.858l1.375-1.37Z"
    />
  </Svg>
)
export default NotesIcon
