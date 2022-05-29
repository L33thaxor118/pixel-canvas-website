import * as React from "react"
import LedClient from "azledclientbrowser"
import { useCallback, useState } from "react"
import Pixel from "./pixel"
import ColorPicker from "../colorpicker"

function PixelGrid() {
  const defaultColor = 0x000000
  const [matrix, setMatrix] = useState(Array.from(Array(16), () => new Array(16).fill(defaultColor)))
  const [color, setColor] = useState(defaultColor)
  const [isPainting, setIsPainting] = useState(false)

  LedClient.setStateListener((newState)=>{
      setMatrix(newState)
  })
  
  const container: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  }
  const title: React.CSSProperties = {
      width: "100%",
      height: "auto",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Chakra Petch",
      color: 'whitesmoke'
  }
  const grid: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: "repeat(16, 40px)",
      gridTemplateRows: "repeat(16, 40px)"
  }
  const item: React.CSSProperties = {
      backgroundColor: 'red',
      borderStyle: 'solid'
  }

  const onPressHandler = useCallback((x: number, y: number)=> {
      LedClient.paintTile(x, y, color)
  }, [color])

  const onColorChanged = useCallback((color: number)=>{
      setColor(color)
  }, [color])
  
  return (
      <div style={container}>
          <h1 style={title}>Welcome</h1>
          <div style={grid} onMouseDown={()=>setIsPainting(true)} onMouseUp={()=>setIsPainting(false)}>
              {matrix.flatMap(
                  (row, y)=>row.map((color, x)=><Pixel key={"x:"+x+"y:"+y} color={color} x={x} y={y} onPress={onPressHandler} paintOnTouch={isPainting}/>)
              )}
          </div>
          <ColorPicker onColorChanged={onColorChanged} color={color}/>
      </div>
  )
}

export default PixelGrid