import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const AiIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={45}
    fill="none"
    {...props}
  >
    <Rect width={47.633} height={45} fill="#3D8CEF" fillOpacity={0.1} rx={18} />
    <Path
      fill="#3D8CEF"
      d="M20.902 11.127c-1.706.254-3.27 1.189-3.849 2.316-.112.203-.315.345-.741.498-1.89.7-3.19 2.884-3.19 5.393 0 1.015.092 1.503.519 2.66l.304.833-.213.285a3.139 3.139 0 0 0-.61 1.869c-.01 1.259.58 2.305 1.717 3.046.559.356.63.437.569.66-.03.143-.081.61-.112 1.047-.05.71-.02.843.213 1.34.153.305.417.67.6.823.426.366 1.29.751 1.848.833.416.06.477.122.782.63.64 1.046 1.645 1.553 3.179 1.563.873.01 1.26-.121 1.808-.63L24 34.03l.284.264c.549.518.915.64 1.849.63 1.483-.031 2.488-.529 3.098-1.534l.294-.508.792-.112c.437-.06 1.016-.213 1.28-.325 1.35-.599 2.072-2.173 1.594-3.504a4.157 4.157 0 0 1-.152-.467c0-.03.234-.203.518-.386.894-.589 1.31-1.483 1.32-2.864.01-.863-.152-1.35-.62-1.94l-.304-.365.305-.742c.457-1.107.62-1.848.62-2.823-.01-1.016-.194-1.838-.63-2.722-.58-1.198-1.9-2.356-3.108-2.742-.477-.152-.569-.224-.762-.61-.447-.893-1.544-1.696-2.752-2.02-1.432-.376-2.783-.244-3.352.324L24 11.86l-.264-.275c-.508-.497-1.463-.66-2.834-.457Zm2.194 1.3c.325.396.396 1.178.396 4.073v2.844H21.97v-2.54h-1.087l-1.097-.01-.203-.325c-.274-.436-1.056-.822-1.503-.74-.549.1-.985.436-1.198.934-.285.63-.194 1.147.304 1.665.66.7 1.625.66 2.275-.101.315-.376.386-.407.863-.407h.529v2.54h2.64v4.163h-3.656v3.21l-.315.233c-.894.66-.934 1.768-.091 2.479.426.365.914.436 1.483.223 1.157-.437 1.33-2.092.284-2.712l-.345-.203v-2.112h2.64v3.554c0 3.778-.02 3.992-.487 4.408-.295.264-.762.335-1.554.254-1.168-.132-1.849-.64-2.133-1.584-.122-.427-.132-.437-.548-.437-1.087 0-2.113-.62-2.448-1.473-.213-.569-.132-1.015.305-1.828l.335-.61-.762-.294c-2.031-.772-2.671-2.67-1.432-4.235l.315-.396h.904c.68 0 .904.03.904.132 0 .152.457.6.782.772.62.315 1.554 0 1.93-.66.619-1.067-.112-2.275-1.372-2.275-.548 0-.579.02-1.056.508l-.498.517-.985-.03-.985-.03-.244-.66c-.325-.905-.406-2.347-.172-3.25.436-1.737 1.635-3.108 2.874-3.312.396-.06.447-.111.7-.619.498-1.026 1.9-1.798 3.525-1.95.924-.081 1.483.01 1.706.284Zm4.794-.02c.67.234 1.574 1.117 1.797 1.747.163.427.183.447.823.61 1.94.487 3.342 2.396 3.342 4.57 0 .832-.224 1.747-.721 2.904l-.397.914.457.457c.539.549.66.853.66 1.605 0 .833-.162 1.31-.619 1.788l-.386.416-.01-1.198V25.03h-4.672v-.802c0-.802 0-.802.335-1.006.66-.386.884-1.411.447-2.061-.315-.488-1.056-.833-1.554-.742-.508.092-1.147.69-1.249 1.158-.142.68.152 1.402.71 1.706l.295.173v2.691h4.672v1.087c0 .924.041 1.178.264 1.747.417 1.036.234 1.767-.568 2.316-.457.315-.925.436-1.9.508l-.822.06-.132.457c-.274.975-1.23 1.534-2.62 1.554-.742.01-1.067-.162-1.351-.73-.153-.285-.183-.62-.183-1.85v-1.492h2.183l.204.304c.223.335.893.711 1.27.711.131 0 .426-.091.66-.203.771-.376 1.086-1.37.67-2.133-.204-.386-.904-.812-1.32-.812-.438.01-1.088.366-1.29.7l-.183.316h-2.194V17.82h4.164l.437.447c.487.518.975.66 1.594.477.477-.142.985-.7 1.077-1.188.142-.782-.498-1.665-1.33-1.828-.488-.091-1.22.264-1.484.721l-.213.356-2.102-.02-2.092-.031-.03-1.524c-.041-2.295.162-2.955.954-3.087.558-.091 1.787.04 2.407.264Zm-9.171 4.6c.243.458-.254.955-.701.722-.234-.132-.294-.6-.091-.802.203-.204.67-.153.792.08Zm11.913.011c.183.254.112.569-.152.71-.427.234-.874-.192-.69-.66.121-.334.629-.365.842-.05Zm-2.529 4.784c.173.507-.426.904-.792.528-.193-.193-.213-.559-.04-.732.07-.07.263-.121.436-.101.223.02.325.101.396.305Zm-9.445.345c.223.213.203.477-.04.7-.448.407-1.087-.253-.702-.72.153-.193.549-.183.742.02Zm1.97 6.703c.285.193.264.62-.03.813-.508.335-1.036-.468-.539-.813.122-.091.254-.163.285-.163.03 0 .162.072.284.163Zm7.82 0c.305.213.295.6-.03.813-.234.152-.274.152-.508 0-.325-.214-.335-.6-.03-.813.122-.091.254-.163.284-.163.03 0 .163.072.284.163Z"
    />
  </Svg>
)
export default AiIcon