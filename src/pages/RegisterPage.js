import { SingUp } from "components/SingUp";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="container-form">
      <div className="entry-window p-l-55 p-r-55 p-t-65 p-b-54">
        <h1 className="heading">Registration</h1>
        <SingUp />
        <p>
          <Link className="link" to="/login">
            SIGN IN
          </Link>
        </p>
      </div>
    </div>
  );
};
