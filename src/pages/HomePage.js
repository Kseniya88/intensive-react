import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className="container-form">
      <h1 className="heading">Welcome</h1>
      <button className="button home" onClick={() => dispatch(removeUser())}>
        Log out
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
