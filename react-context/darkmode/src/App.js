import Header from "./Header";
import Button from "./Button";
import "./styles.css";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
