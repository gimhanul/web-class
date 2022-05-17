import React, { useEffect, useState } from "react";

export default function R031_ReactHook(props) {
    const [contents, setContents] = useState('[This Is React]');

    useEffect(() => {
        console.log('useEffect');
    })

    return (
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[This Is Hook]')}>버튼</button>
        </div>
    )
}