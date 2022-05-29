import * as React from "react"
import PixelGrid from "./pixelgrid"

export default function App() {
    const container: React.CSSProperties = {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgb(69, 90, 100)'
    }
    return (
        <div style={container}>
            <PixelGrid/>
        </div>
    )
}