import { useContext } from "react";
import UsernameContext from "./UsernameContext";

export default function Header() {
  const { username } = useContext(UsernameContext);
  return (
    <header>
      <p>Welcome, {username}!</p>
    </header>
  );
}
