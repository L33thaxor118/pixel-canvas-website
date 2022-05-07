import * as React from "react"

export default function App() {
    const style1: React.CSSProperties = {
    }
    const style2: React.CSSProperties = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    }
    return (
        <div style={style2}>
            <h1 style={style1}>Hello worllld!!!</h1>
        </div>
    )
}