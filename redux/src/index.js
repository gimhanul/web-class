import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function reducer(state = 100, action) {
  if (action.type === "increase") {
    state++;
  } else if (action.type === "decrease") {
    state--;
  }

  return state;
}

let store = createStore(reducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
