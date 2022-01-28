import { useState, useEffect } from "react";
import { auth } from "./services/firebase";

import "./App.css";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <Main user={user} />
    </div>
  );
}

export default App;
