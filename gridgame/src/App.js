import { useState } from "react";

const App = () => {
  const [msg, setMsg] = useState("GRID GAME");

  return <h1>{msg}</h1>;
};

export default App;
