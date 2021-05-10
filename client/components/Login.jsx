import React from "react";
import { useHistory } from "react-router-dom";

function Login({
  setFirstName,
  setAge,
  email,
  setEmail,
  password,
  setPassword,
  setEmergencyContactName,
  setEmergencyContactPhone,
  setAddiction,
  setMissedLogin,
}) {
  const history = useHistory();

  const login = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email,
        password,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setPassword("");
        setAge(data.age);
        setEmergencyContactName(data.emergencyContactName);
        setEmergencyContactPhone(data.emergencyContactPhone);
        setAddiction(data.addiction);
        setFirstName(data.firstName);
        // make functionality for missed login they will send last login date

        setMissedLogin(data.lastLoginDate);
        setMoodHistory(data.moodHistory);
        history.push("/user");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="login">
      <label for="email">Email </label>
      <input
        id="email"
        type="email"
        placeholder="MyEmail@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label for="password">Password </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit" onClick={(e) => login()}>
        Submit
      </button>
    </div>
  );
}

export default Login;
