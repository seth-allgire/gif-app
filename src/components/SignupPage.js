import React, { useContext, useEffect, useState } from "react";
import { GiphyContext } from "../shared/GiphyContext";
import useAxios from "../hooks/useAxios";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //   const { setUser } = useContext(GiphyContext);
  const [userObj, setUserObj] = useState(null);
  const { json } = useAxios("/api/users/signup", "post", userObj);

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
          if (username.length < 4 || password.length < 8) {
            setError(true);
            return;
          }
          debugger;
          setUserObj({ username, password });
        }}
      >
        Signup
      </button>
      <div>{json && json.error}</div>
      <div>{json && json.data}</div>
    </div>
  );
}
