import React, { useContext, useState } from "react";
import { GiphyContext } from "../shared/GiphyContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(GiphyContext);
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
        ></input>
        <div>
          {error &&
            password.length < 4 &&
            "Password must be at least 4 characters"}
        </div>
      </div>
      <button
        onClick={() => {
          if (username.length < 4 || password.length < 4) {
            setError(true);
            return;
          }
          setUser(username);
        }}
      >
        Login
      </button>
    </div>
  );
}
