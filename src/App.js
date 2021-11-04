import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import User from "./components/User";
import "../src/components/style.scss";

function App() {
  const [user, setUser] = useState(null);
  const inputRef = useRef();
  useEffect(() => {
    fetchUserProfile("anass-knene");
  }, []);
  const fetchUserProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username} `);
    const result = await response.json();
    setUser(result);
  };
  const searchNewUser = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (inputRef.current.value.trim() !== "") {
      fetchUserProfile(inputRef.current.value);
    } else {
      alert("Add something to input field");
    }
    inputRef.current.value = "";
  };
  return (
    <div className="App">
      <Header />
      <form onSubmit={searchNewUser}>
        <input
          className="inputField"
          type="text"
          name="username"
          ref={inputRef}
        />
        <input type="submit" value="search" />
      </form>

      {user && <User userData={user} />}
    </div>
  );
}

export default App;
