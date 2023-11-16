import { Login } from "components/Login";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="container-form">
      <div className="entry-window p-l-55 p-r-55 p-t-65 p-b-54">
        <h1 className="heading">Login</h1>
        <Login />
        <p>
          <Link className="link" to="/register">
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
};
