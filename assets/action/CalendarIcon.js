import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CalendarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#333"
      d="M6.039 20.125c-.441 0-.81-.148-1.104-.443a1.5 1.5 0 0 1-.444-1.105V6.34c0-.44.148-.809.444-1.104a1.497 1.497 0 0 1 1.104-.443h1.696V2.655h1.032v2.137h6.855V2.655h.958v2.137h1.697c.44 0 .808.148 1.104.443.295.295.443.663.443 1.104v12.238c0 .441-.147.81-.442 1.104a1.5 1.5 0 0 1-1.105.444H6.039Zm0-.958h12.238a.565.565 0 0 0 .405-.184.566.566 0 0 0 .184-.406v-8.404H5.449v8.404c0 .147.062.282.184.406a.565.565 0 0 0 .406.184Zm-.59-9.953h13.417V6.34a.566.566 0 0 0-.184-.405.566.566 0 0 0-.405-.184H6.039a.565.565 0 0 0-.406.184.565.565 0 0 0-.184.405v2.875Zm6.709 4.35a.709.709 0 0 1-.518-.22.709.709 0 0 1-.22-.518c0-.197.073-.37.22-.516a.708.708 0 0 1 .518-.22c.198 0 .37.073.517.22.147.147.22.32.22.517 0 .198-.073.37-.22.517a.708.708 0 0 1-.517.22Zm-3.834 0a.709.709 0 0 1-.517-.22.708.708 0 0 1-.22-.518c0-.197.073-.37.22-.516a.708.708 0 0 1 .517-.22c.198 0 .37.073.518.22.147.147.22.32.22.517 0 .198-.073.37-.22.517a.709.709 0 0 1-.518.22Zm7.667 0a.708.708 0 0 1-.518-.22.708.708 0 0 1-.22-.518c0-.197.073-.37.22-.516a.708.708 0 0 1 .518-.22c.198 0 .37.073.518.22.146.147.22.32.22.517 0 .198-.074.37-.22.517a.709.709 0 0 1-.518.22Zm-3.833 3.686a.708.708 0 0 1-.518-.22.708.708 0 0 1-.22-.518c0-.197.073-.37.22-.517a.709.709 0 0 1 .518-.22c.198 0 .37.074.517.22.147.147.22.32.22.518s-.073.37-.22.517a.71.71 0 0 1-.517.22Zm-3.834 0a.708.708 0 0 1-.517-.22.708.708 0 0 1-.22-.518c0-.197.073-.37.22-.517a.709.709 0 0 1 .517-.22c.198 0 .37.074.518.22.147.147.22.32.22.518s-.073.37-.22.517a.71.71 0 0 1-.518.22Zm7.667 0a.708.708 0 0 1-.518-.22.708.708 0 0 1-.22-.518c0-.197.073-.37.22-.517a.708.708 0 0 1 .518-.22c.198 0 .37.074.518.22.146.147.22.32.22.518s-.074.37-.22.517a.71.71 0 0 1-.518.22Z"
    />
  </Svg>
)
export default CalendarIcon