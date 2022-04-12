function TemporaryName() {
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

const page = (
    <div>
        <h1 className="header">김한울</h1>
        <h1>2102</h1>
    </div>
)

const nav = (
    <nav>
        <h1>BSSM</h1>
        <ul>
            <li>breakfast</li>
            <li>lunch</li>
            <li>dinner</li>
        </ul>
    </nav>
)

ReactDOM.render(<TemporaryName />, document.getElementById("root"));