import * as React from "react"
import { useState, memo } from "react"
import { decimalColorToRgb } from "../../utils/colorUtils"

interface PixelPropTypes {
  x: number,
  y: number,
  color: number,
  onPress: (x: number, y: number) => void,
  paintOnTouch: boolean
}

const Pixel = memo((props: PixelPropTypes) => {
  const [focused, setFocused] = useState(false)
  const item: React.CSSProperties = {
      backgroundColor: `${decimalColorToRgb(props.color)}`,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: focused ? 'white' : 'black',
      cursor: 'pointer'
  }
  React.useEffect(()=>{
      if (focused && props.paintOnTouch) {
          props.onPress(props.x, props.y)
      }
  }, [focused])

  return (
      <div
          draggable={false}
          style={item} 
          onMouseDown={()=>props.onPress(props.x, props.y)}
          onMouseEnter={()=>setFocused(true)} 
          onMouseLeave={()=>setFocused(false)}>
      </div>
  )
})

export default Pixel