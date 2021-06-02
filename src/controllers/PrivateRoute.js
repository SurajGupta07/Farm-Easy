import { Route, Navigate} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export function PrivateRoute({ path, ...props }) {
    let { login } = useAuth();
    return login ? (
      <Route {...props} path={path} />
    ) : (
      <Navigate state={{ from: path }} replace to="/login" />
    );
  }
  