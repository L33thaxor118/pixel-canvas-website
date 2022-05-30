import * as React from "react"
import { useState } from "react"
import { Colors, decimalColorToRgb } from "../utils/colorUtils"

interface ColorPickerPropTypes {
  onColorChanged: (color: number)=>void,
  color: number
}

const ColorPicker = (props: ColorPickerPropTypes) => {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const container: React.CSSProperties = {
      width: "510px",
      height: "70px",
      display: "flex",
      overflow: "scroll",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'rgb(113, 135, 146)',
      marginTop: '20px',
      borderRadius: '20px',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginBottom: '20px'
  }
  const colorContainer = (selected: boolean, color: string): React.CSSProperties => {
      return {
          boxSizing: 'border-box',
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          borderWidth: '2px',
          borderStyle: `${selected ? 'solid' : 'none'}`,
          backgroundColor: color,
          marginLeft: `3px`,
          marginRight: `3px`,
          cursor: 'pointer'
      }
  }

  React.useEffect(()=> {
      props.onColorChanged(colors[selectedIdx])
  }, [selectedIdx])
  
  const colors = [Colors.black, Colors.white, Colors.red, Colors.orange, Colors.pink, Colors.yellow, Colors.blue, Colors.lightBlue, Colors.green]

  return (
      <div style={container} draggable={false}>    
          {colors.map((color, idx)=>
              <div key={color} style={colorContainer(selectedIdx === idx, decimalColorToRgb(color))} 
              onClick={()=>{
                  setSelectedIdx(idx)
              }}/>
          )}
      </div>
  )
}

export default ColorPicker