import * as React from "react"
import PixelGrid from "./pixelgrid"

export default function App() {
    const container: React.CSSProperties = {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgb(69, 90, 100)',
        display: 'flex',
        flexDirection: 'column'
    }
    const title: React.CSSProperties = {
        width: "100%",
        height: "auto",
  
        paddingTop: "20px",
        paddingBottom: "20px",
        textAlign: "center",
        fontFamily: "Chakra Petch",
        color: 'whitesmoke'
    }
    return (
        <div style={container}>
            <h1 style={title}>Welcome</h1>
            <PixelGrid/>
        </div>
    )
}