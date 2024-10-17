import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../utils/PropsType";
// import { sessionName } from "../utils/constants";
import Cookies from "js-cookie";
const ProtectedRoute = ({ children, cookieName }: ProtectedRouteProps) => {
  console.log(Cookies.get(cookieName));
  return !Cookies.get(cookieName) ? (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
};
export default ProtectedRoute;
