import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { useState } from "react";


const bodyManFront = (props) => {
  const [clickedPath, setClickedPath] = useState(null);

  const handlePathClick = (pathId) => {
    setClickedPath(pathId === clickedPath ? null : pathId); // Toggle the clicked path
  };
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={460}
    viewBox="0 0 800 1360"
    {...props}

  >
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M418.334 70C416.668 38 382 19 363 19c-30.833 0-50.167 31.5-53.167 44.5-1.915 8.295-2.833 23.5-2.5 28.167s1 12.333.667 16.167c2.04 7.695 6.667 23 6.667 33 .667 5.167 1.167 12.5 3.333 18.833 3 4 22.5 23.333 44.167 23.333s36.5-8.667 45.708-23c2.625-5.625 5-15.25 4.75-18.625-.708-5.125 4.708-28.042 5.709-32.708.667-7.333 1.666-6.667 0-38.667z"
      className="male-front-head"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
      onPress={() => handlePathClick("head")} 
      onClick={() => handlePathClick("head")} 
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M340.5 102.25c8.561 0 14.5-4.197 14.5-9.375s-5.939-9.375-14.5-9.375-15.5 4.197-15.5 9.375 6.939 9.375 15.5 9.375z"
      className="male-front-eye-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M388.5 102.25c8.561 0 15.5-4.197 15.5-9.375s-6.939-9.375-15.5-9.375-14.5 4.197-14.5 9.375 5.939 9.375 14.5 9.375z"
      className="male-front-eye-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M299.833 106c-4 4-1.833 17-.833 20.667s5.833 14.667 7.167 15.833 5.167 4.833 8.5-1.667c0-10-4.627-25.305-6.667-33-1-1.833-4.167-5.833-8.167-1.833z"
      className="male-front-ear-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M412.625 141.375c3.75 6.375 8.875 3.25 10-1.75s7.625-7.875 6.75-23.625-8.041-11.667-11.041-7.333c-1.001 4.666-6.417 27.583-5.709 32.708z"
      className="male-front-ear-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M355.375 105.25c-.375 3.125-5 6.375-5.625 13.125-.438 4.731 6.25 7.5 10.25 6.5 5 2.625 6.75.625 9.875-.625 5.75.875 8-3.25 8-7.75s-4.375-6.75-4.875-12.25-3.375-7.625-3.125-13.5-2.375-9.875-6.086-9.875c-5.21 0-6.289 7.875-5.914 10.625s-2.125 10.625-2.5 13.75z"
      className="male-front-nose"
      cursor="default"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M374.25 133.25c-2.256-2.723-6.231-1.652-7.875-.75-.882.484-3.5.875-5.125-.375s-6.125-.125-7.375 1.625-11.75 5.125-12.625 8.125 8.625 3.25 11 4.125 4.5 3.75 13.125 3.75 10.966-2.787 13.25-3.25 8.125-1.125 8.5-3.5-9.25-5.375-12.875-9.75z"
      className="male-front-mouth"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M307.667 244.167c15.667-.833 41.167-2.166 45.333 3.667s15.834 6 19.667 0 38.028-6.245 50.833-4.333c4.95.739 9.833.81 14.438.363 10.976-1.066 20.373-5.078 25.342-10.017-8.889.081-18.524-5.195-31.03-10.721C416.125 216 407.625 207.25 407 204.5s.125-34.5.875-44.5c-9.208 14.333-24.041 23-45.708 23S321 163.667 318 159.667c2.167 6.333 1.5 29.833.75 45.333-8.5 15.25-40 24-48 27.5 2.042 1.655 10.695 6.598 20.857 9.508 5.186 1.485 10.766 2.44 16.06 2.159z"
      className="male-front-neck"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M486.5 295c-2.018-20.749-37.75-48.25-48.562-51.137a59.274 59.274 0 0 1-14.438-.363c-12.805-1.911-47-1.667-50.833 4.333s-15.5 5.833-19.667 0-29.667-4.5-45.333-3.667c-5.294.281-10.873-.674-16.059-2.159-8.004 3.48-46.033 26.426-52.127 58.308a45.965 45.965 0 0 0-.814 7.351c-1 35.667.003 72.11-.165 85.722.383-.096 9.666 25.111 12.166 30.778S255.75 442 259.25 448.75C267.5 456.5 306 474 332.5 467s36.5-6.244 65 .128 52.668-2.794 73.084-27.211c1.25-3.25 4.75-11.75 5.333-15s2.667-6.999 4.084-9.749 7.455-21.675 8.005-21.176c.672-13.342-.339-86.991-1.506-98.992z"
      className="male-front-chest"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M397.5 467.128C369 460.756 359 460 332.5 467s-65-10.5-73.25-18.25c3.5 6.75 2 12 3.75 17.75s5 21.334.5 41.501-1.667 35.666-.5 40.166c.785 3.029 2.326 5.001 1.419 8.813C276 568.5 294.834 591.5 364.917 591.5s86.417-20.498 98.75-33.499c-1.666-4.5-.501-12 2.499-21.167s-3.499-44.667-3.833-52.833 2.501-21.5 2.751-27.584 4.25-13.25 5.5-16.5C450.168 464.334 426 473.5 397.5 467.128z"
      className="male-front-abdomen"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M364.917 591.5c-70.083 0-88.917-23-100.498-34.52-.44 1.852-1.458 4.137-3.419 7.188-2.708 4.214-5.009 15.491-6.673 27.332 10.34 9.027 56.21 47.939 84.084 82.636 8.255-3.802 35.957-5.104 49.606-.453 28.214-33.03 74.964-71.046 85.649-79.515-1-13.666-8.334-31.667-10-36.167C451.334 571.002 435 591.5 364.917 591.5z"
      className="male-front-pelvis"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M338.412 674.136c7.636 9.505 13.921 18.693 17.755 26.864 1-2.167 2.75-2.833 6.833-3.167s5.75.834 6.917 1.584c3.8-7.69 10.229-16.519 18.101-25.734-13.65-4.652-41.351-3.349-49.606.453z"
      className="male-front-pubis"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M239.48 300.316c6.094-31.882 44.123-54.828 52.127-58.308-10.162-2.91-18.816-7.853-20.857-9.508-8 3.5-15.5 2-26.75 4.25S202.5 250 190.5 274.5s-9.5 57-9.25 65.75a31.896 31.896 0 0 1-.058 3.222c12.866-15.389 43.708-19.127 58.288-43.156z"
      className="male-front-shoulder-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M486.5 295c13.5 30.001 46.022 30.211 58.595 48.439-.768-3.438-1.004-7.947-.345-14.439 1.931-19.007-4.875-52.125-17.875-68.5s-53.125-26.75-63.595-26.654c-4.969 4.939-14.366 8.951-25.342 10.017C448.75 246.75 484.482 274.251 486.5 295z"
      className="male-front-shoulder-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M238.667 307.667a45.85 45.85 0 0 1 .814-7.351c-14.58 24.029-45.423 27.768-58.288 43.156-.437 6.049-2.914 8.093-7.442 14.778C168.5 366 158.5 397.5 155 409.5a108.315 108.315 0 0 0-1.221 4.551c-1.413 17.735 10.718 25.876 24.421 31.618 11.394 4.774 24.501 8.306 33.45 1.543.711-1.544 1.634-3.368 2.85-5.712 3.5-6.75 23.363-47.953 24.001-48.111.168-13.612-.834-50.055.166-85.722z"
      className="male-front-arm-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M549.573 445.669c14.284-5.985 25.869-14.57 23.177-33.919-1.625-11.25-17.875-51.25-22-57.25-2.265-3.294-4.53-6.027-5.655-11.061C532.522 325.211 500 325.001 486.5 295c1.167 12.001 2.178 85.65 1.506 98.992.108.098 20.827 42.675 23.494 48.175 8.512 13.114 24.509 9.186 38.073 3.502zM178.2 445.669c-13.704-5.742-25.834-13.883-24.421-31.618-1.917 7.803-1.51 9.506-8.779 18.699-5.907 7.47-15.794 29.063-22.538 48.927 15.882-28.244 68.495 4.695 75.547 19.871 6.154-16.332 11.13-43.69 11.49-47.172.245-2.366.814-4.26 2.15-7.163-8.947 6.762-22.055 3.23-33.449-1.544z"
      className="male-front-arm-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M606 485.25c-2.028-7.858-4.954-16.438-9.03-24.074-4.97-9.31-16.414-30.066-17.72-32.176-3.25-5.25-5.336-9.194-6.5-17.25 2.692 19.349-8.893 27.934-23.177 33.919-13.564 5.684-29.562 9.612-38.073-3.502 2.667 5.5 7 11.333 7 17.333 0 1.363 1.692 13.781 4.385 25.354 2.187 9.396 5.372 18.235 6.115 20.146-1.5-13 62.5-57 77-19.75z"
      className="male-front-elbow-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M122.462 481.677c-2.96 8.722-5.318 17.111-6.462 23.823-2.028 11.896-8.779 39.212-16.707 62.487a330.09 330.09 0 0 1-5.337 14.495c1.722 9.015 32.508 23.476 42.632 18.606 1.457-2.714 2.764-5.01 3.745-6.587 4.667-7.5 11.917-19.251 24.917-35.251s25.5-39.75 32-55.75c.255-.629.508-1.285.76-1.953-7.052-15.175-59.665-48.114-75.548-19.87z"
      className="male-front-forearm-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M632.833 581.061c-2.89-7.644-5.897-16.096-8.083-21.561-4-10-12.75-51-18.75-74.25C591.5 448 527.5 492 529 505c7 18 35.75 60.25 40.375 65.875s16.49 23.007 19.5 28.25c6.539 10.154 45.792-8.458 43.958-18.064z"
      className="male-front-forearm-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M93.956 582.482c-5.112 12.975-9.774 22.651-10.456 24.143-.886 1.939-1.456 3.337-2.977 4.62 9.057.416 28.988 8.686 43.015 19.44 2.127-7.809 8.37-20.88 13.05-29.598-10.124 4.871-40.91-9.59-42.632-18.605z"
      className="male-front-wrist-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M648.75 611.25c-8.5-4-5.75-8.25-9.5-15-1.7-3.061-4.019-8.847-6.417-15.189 1.834 9.606-37.419 28.219-43.958 18.064 1.544 2.689 5.188 10.48 8.506 17.668 3.15 6.824 6.007 13.104 6.494 13.957 14.875-11.916 36.458-20.084 44.875-19.5z"
      className="male-front-wrist-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M67.75 616.375c-13.375 3.75-33.125 20.25-37.75 23.25s-7.75 8.375-11.875 10.5-4.125 8.625 0 10.5 9.625.125 13-1.5 9.042-8.457 15.5-10.5c3.788-1.198 7.625-1.5 7.625.125s-8.5 22.375-9.125 25.5-3.875 13.875-5.875 21.125-5.5 21.25-6.75 29.25.875 11.75 5.125 12.625 7.875-7.625 8.646-10.625 2.854-12.75 3.979-15.5 6.625-18.75 8-22 2.375-8.625 4.375-7.75-.375 5.875-1.75 9.75S53.75 715.875 53 719.75s-5 19.75-5.25 22.5-1.875 8.75 2.75 10.5 7.75-1.875 9.5-5.625S65.375 729.5 67.375 721s5.75-19.5 7.125-24 2.125-8 3.875-7.875 1.5 2.5.75 4.75S73 714.5 72 719.5s-4.25 16.125-5.375 20.375-1.75 9.25 2.5 10.75 6.875-1.5 8.75-4.75 7.875-21.5 9.369-27.125 4.756-18.5 6.131-22.375 2.5-5.625 3.625-5.5.25 2.625-1.125 7-5.375 18.5-7.125 25-2.25 9.625 0 12 7.083-.541 8.25-2.541 3-11 5.667-16.333c1.676-3.352 3.669-11.246 6.53-19.381 1.691-4.808 4.336-9.699 5.636-13.786 3.5-11 4.333-18.833 7-28.5s.167-11.667 1-20.167c.096-.975.344-2.156.705-3.481-14.027-10.755-33.958-19.024-43.015-19.44-1.911 1.611-5.325 3.041-12.773 5.129z"
      className="male-front-hand-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M702.25 641.25c-2.75-3.75-17.5-11.5-21.75-14.5-2.125-1.5-7.938-4.375-14.281-7.375S653 613.25 648.75 611.25c-8.417-.584-30 7.584-44.875 19.5 1 1.75-.875 7.125.125 16.25s4.125 23.25 6.375 32.125 7 18.375 8.5 22.875 9.403 29.364 12.625 32c2.75 2.25 7.5.75 8.25-2.75s-1.625-10.875-2.5-14.125-5.625-19.25-6.5-21.75-2-5.125-.25-5.125 2.125 2.75 3.25 5.625 5.875 19.5 6.875 24.125 4.5 17 6.25 21.75 5 10 9 9.75 4.875-4.75 5.125-8.375-5.875-23.5-6.375-27.625-5.375-19.25-6.125-21.25-1.375-5 .625-5.125 2.875 5.625 3.75 8.625 9.75 31.875 10.25 35.5 2.625 14.5 6 17.75c2.744 2.643 5.625 3.875 8.625.875s2.25-10 .875-15.25-4.625-21.125-5.5-25-6.375-20.875-7.25-24-2.125-5.375-1.125-5.75 2.25 1.125 3.5 5.25 6.625 20.5 8.375 25.5 1.5 11.625 4.125 17.375 7 7.625 10.625 7.125 4.277-7.391 4.375-10.125-4.75-20.5-6.25-27.375-5.25-16.625-6.5-23-7.375-23.375-8.625-26-.625-4.75 2.5-3.875 9.25 2.625 13 7.625 10.875 6.75 13.375 7 8.5.375 9.25-6.375-7.5-10-10.25-13.75z"
      className="male-front-hand-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M254.327 591.5c-2.021 14.389-3.102 29.611-2.827 34 .5 8-6.5 46-11.5 70-3.981 19.107-12.131 56.915-14.375 92.478-.575 9.105.172 18.063.375 26.522.845 35.062 9.541 55.489 16.139 69.427 35.654 13.2 53.799 56.767 88.484 34.358 2.478-11.204 8.03-39.965 9.627-52.285 1.75-13.5 10.083-66.333 11.815-88.167s1.269-38.833.435-43.166-.167-12.667-.417-21.334 3.083-10.166 4.083-12.333c-3.834-8.171-10.12-17.359-17.755-26.864-27.873-34.697-73.744-73.609-84.084-82.636z"
      className="male-front-thigh-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M388.018 673.683c-7.872 9.216-14.301 18.044-18.101 25.734 1.167.75 3.083 5.083 4.333 8.083s1 20.75-.25 31.5 1.5 59.75 3.75 71 8.417 55.334 10.084 67.001 5.166 31.5 7.166 39.833c36.334 25.833 52.479-20.023 89.334-33.168 5.667-10 13.999-27.333 15.999-52.333.874-10.926 1.603-27.168.824-43.078-1.002-20.493-3.844-40.436-5.157-47.754-2.333-13-14.834-82.834-17-92.667s-4.333-40-5.333-53.666c-10.686 8.469-57.436 46.484-85.649 79.515z"
      className="male-front-thigh-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M242.139 883.927c1.212 2.56 2.353 4.901 3.361 7.073 6.5 14 6 37.5 6.5 61 .078 3.657.262 7.679.348 11.921 10.591 44.449 51.024 21.223 68.904 3.938.325-1.35.929-2.658 1.373-3.483.875-1.625 2.125-10.625 3.375-16.625s2-18.5 4-26.75c.175-.721.386-1.643.623-2.715-34.685 22.407-52.83-21.159-88.484-34.359z"
      className="male-front-knee-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M395 916.834c2 8.333 4.333 14.167 4.333 24s4 22.167 5.167 25c17.417 18.167 61 46.833 69.25-8.834 0-11.5 3.25-39.334 3.584-50.334s1.333-13 7-23c-36.855 13.145-53 59.001-89.334 33.168z"
      className="male-front-knee-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M252.348 963.921c.085 4.202.072 8.622-.239 13.122-1.393 20.15-4.799 41.913-4.109 52.957 1 16 4.5 62 7.5 83s6.875 83 7.125 87.5c.06 1.082.008 2.26-.107 3.478 6.992-11.484 36.463-9.869 44.754-6.101-1.079-3.858-2.297-10.522-2.438-15.043-.167-5.333 7.5-47.167 8.333-58.333s3.667-29.5 4.333-33.333 5.75-17.168 9.5-25.918 3.5-20 2.5-27.25-3.75-45.75-4.5-51.375-2.25-13.125-3.5-15.125c-.615-.984-.563-2.333-.248-3.642-17.88 17.286-58.313 40.512-68.904-3.937z"
      className="male-front-leg-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M404.5 965.834c1.167 2.833-1.25 16.416-4.25 33.916s-4.083 48.751-3.083 56.751 9.667 28.833 11.833 35 .667 8.833 2 20.833 7.167 47.334 9 59 1.5 21-.667 27.167C426 1194 462 1191.5 465.5 1207c-.75-4.25-1.75-10-1-22.25s5-60.25 8.25-87.75 6.75-82 4.5-96.5-3.5-32-3.5-43.5c-8.25 55.667-51.833 27.001-69.25 8.834z"
      className="male-front-leg-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M262.518 1203.978c-.363 3.847-1.388 8.108-1.768 11.147-.5 4 2.125 8.625 1.375 15.875-.034.332-.091.67-.146 1.008 12.665-4.423 40.242 8.668 48.998 21.075 1.177-7.814 1.063-15.23-.478-19.082-1.667-4.166-2.167-7.167-.833-12.5s-.667-18.667-1.833-21.834a24.318 24.318 0 0 1-.562-1.79c-8.29-3.769-37.761-5.384-44.753 6.101z"
      className="male-front-ankle-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M419.333 1198.501c-2.167 6.167-3.166 21-2.666 22.667s.833 9.333-1 13.499-1.667 13.334-.667 21.5c6-13.583 37-29.917 50-23.667-2-5.5-2.25-5.75-1-9.25s2.25-12 1.5-16.25c-3.5-15.5-39.5-13-46.167-8.499z"
      className="male-front-ankle-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M261.979 1232.008c-1.15 7.047-6.68 15.393-10.854 23.742-4.375 8.75-13 19.375-21 28.25s-10.375 26.375-10.125 29.5 3.125 5.875 6.125 5.5c0 1.125 1 2.875 4.25 2.5.25 2 0 6.25 8.25 5 4 4.875 7.875 4.625 10.75 1.75 5.292 6.314 10.383 6.492 15.75 5.809 4.375-.558 11.125-7.809 12.25-10.559s2.25-3.875 5.875-6.75c1.972-1.563 3.795-4.086 5.156-8.824 1.141-3.973 1.957-10.098 2.261-12.758.667-5.833.667-10.834 4.5-21.334 8.667-3.667 14-10.333 15.5-18.833.113-.642.215-1.28.311-1.918-8.757-12.407-36.333-25.498-48.999-21.075z"
      className="male-front-foot-rt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />
    <Path
      fill={clickedPath === "head" ? "red" : "rgba(255, 0, 0, 0)"}
      stroke="#d3d3d3"
      d="M415 1256.167c1 8.166 12 15 15 16.5s3 4.167 3.833 7 2.834 10.667 3.834 21 6.25 15.749 8.666 17.666 2.834 3 3.667 4.667 3.417 6.083 11.167 9.75 14.999-1.167 16.749-4.75c4.5 4.5 11.084.416 12.25-2.084 4.916 1.416 7.834-3.25 7.917-5.166 1.583.334 3.584-1.082 4.25-2.582.833.334 2.5.666 5-3.334s-3-17.5-4.167-21.667-9.666-14.833-16.333-21.833-7.833-11.333-12.5-18.667S467 1238 465 1232.5c-13-6.25-44 10.084-50 23.667z"
      className="male-front-foot-lt"
      cursor="pointer"
      vectorEffect="non-scaling-stroke"
    />

  </Svg>
)
}
export default bodyManFront
