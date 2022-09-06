import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const value = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>증가</button>
      <button onClick={() => dispatch({ type: "decrease" })}>감소</button>
    </div>
  );
}
