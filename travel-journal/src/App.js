import './App.css';
import Header from "./components/Header";
import TravelPlace from "./components/TravelPlace";
import data from "./data";

function App() {
    const travelPlaceList = data.map(item => {
        return (
            <TravelPlace {...item}
            dataCount = {data.length}
            />
        );
    })

    return (
        <div className="App">
        <Header />
            <section className="travel-place-list">
                {travelPlaceList}
            </section>
        </div>
    );
}

export default App;
