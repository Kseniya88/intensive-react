import { useState } from "react";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="input-window">
      <input
        className="input-email-password"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      ></input>
      <input
        className="input-email-password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      ></input>
      <button className="button" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};
