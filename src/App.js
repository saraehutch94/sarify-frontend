import { useState, useEffect } from "react";
import { auth } from "./services/firebase";

import "./App.css";
import Main from "./components/Main";

function App() {
  // set initial user state to falsy value
  const [user, setUser] = useState(null);

  useEffect(() => {
    // when user is logged in, (auth state changes), setUser to the user present
    // otherwise, setUser to null
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <Main user={user} />
    </div>
  );
}

export default App;
