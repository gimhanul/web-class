import "./styles.css";
import Header from "./Header";
import { useContext, useState } from "react";
import UsernameContext from "./UsernameContext";

export default function App() {
  const [username, setUsername] = useState("hanul");
  const [inputUsername, setInputUsername] = useState("");

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <Header />
        <main>
          <p className="main">No new notifications, {username}! 🎉</p>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
          <button
            onClick={() => {
              setUsername(inputUsername);
              setInputUsername("");
            }}
          >
            Change Username
          </button>
        </main>
      </div>
    </UsernameContext.Provider>
  );
}
