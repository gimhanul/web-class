import React from "react";

export default function Box(props) {
    const [on, setOn] = React.useState(props.on);

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    function toggle() {
        setOn(!on);
    }

    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}
