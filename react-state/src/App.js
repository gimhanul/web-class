import React from "react"
import boxes from "./boxes"
import "./style.css"
import Box from "./Box"

export default function App() {

    const [squares, setSquares] = React.useState(boxes);

    const squareElements = squares.map(square => {
        return (
            <Box
                key={square.id}
                id={square.id}
                on={square.on}
            />
        )
    })

    return (
        <main>
            {squareElements}
        </main>
    )
}
