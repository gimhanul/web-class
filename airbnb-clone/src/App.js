import './App.css';
import Navbar from "./components/Navbar";
import ImageBox from './components/ImageBox';
import Cards from './components/Cards';
import data from "./data"

function App() {
  const cardList = data.map((item) => {
    return (<Cards {...item} />
    );
  })

  return (
    <div className="App">
      <Navbar />
      <ImageBox />
      <section className="cards-list">
        {cardList}
      </section>
    </div>
  );
}

export default App;