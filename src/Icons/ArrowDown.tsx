import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.002 5a1 1 0 10-2 0h2zm-1 26l-.707.707.707.707.707-.707-.707-.707zm10.92-9.507a1 1 0 00-1.413-1.414l1.414 1.414zM8.495 20.079a1 1 0 10-1.414 1.414l1.414-1.414zM17.002 5v26h2V5h-2zM27.509 20.08L17.295 30.293l1.414 1.414 10.214-10.214-1.414-1.414zm-8.8 10.214L8.494 20.079 7.08 21.493l10.215 10.214 1.414-1.414z"
        fill="#333"
      />
    </Svg>
  )
}

export default SvgComponent
