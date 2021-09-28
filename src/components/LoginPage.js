import React from "react";
import { useState } from "react/cjs/react.development";

export default function LoginPage({ setActiveUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          placeholder="Username"
        ></input>
      </div>
      <div>
        {error &&
          username.length < 4 &&
          "Username must be at least 4 characters"}
      </div>
      <div>
        <label htmlFor="password">Username:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
        ></input>
        <div>
          {error &&
            username.length < 4 &&
            "Username must be at least 4 characters"}
        </div>
      </div>
      <button
        onClick={() => {
          if (username.length < 4 || password.length < 4) {
            setError(true);
            return;
          }
          setActiveUser(username);
        }}
      >
        Login
      </button>
    </div>
  );
}
