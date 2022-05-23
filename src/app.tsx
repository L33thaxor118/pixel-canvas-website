import * as React from "react"
import { useCallback, useState, memo } from "react"

export default function App() {
    const defaultColor = 0x000000
    const [matrix, setMatrix] = useState(Array.from(Array(16), () => new Array(16).fill(defaultColor)))
    
    const container: React.CSSProperties = {
        width: "100%",
        height: "100%",
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
        console.log("pressed x: " + x + ", y: " + y)
        setMatrix((prevMatrix)=>{
            const newMatrix = [...prevMatrix]
            newMatrix[y][x] = 0xff0000
            console.log(newMatrix)
            return newMatrix
        })
    }, [])
    
    return (
        <div style={container}>
            <h1 style={title}>Welcome</h1>
            <div style={grid}>
                {matrix.flatMap(
                    (row, y)=>row.map((color, x)=><Pixel key={"x:"+x+"y:"+y} color={color} x={x} y={y} onPress={onPressHandler}/>)
                )}
            </div>
        </div>
    )
}

interface PixelPropTypes {
    x: number,
    y: number,
    color: number,
    onPress: (x: number, y: number) => void
}

const Pixel = memo((props: PixelPropTypes) => {
    console.log("rendering pixel")
    const [focused, setFocused] = useState(false)
    const item: React.CSSProperties = {
        backgroundColor: `#${props.color.toString(16)}`,
        borderStyle: 'solid',
        borderColor: focused ? 'white' : 'black',
        cursor: 'pointer'
    }
    return (
        <div 
            style={item} 
            onClick={()=>props.onPress(props.x, props.y)}
            onMouseEnter={()=>setFocused(true)} 
            onMouseLeave={()=>setFocused(false)}>

        </div>
    )
})