import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import EmailVerification from "../Pages/VerfiyYourEmail";
import Login from "../Pages/Login";
import { ForgotPassword } from "../Pages/LoginWithoutPassword";
import Dashboard from "../Pages/Dashboard";
import VerificationCode from "../Pages/LoginWithoutPasswordVerification";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import Friends from "../Pages/Friends/Friends.tsx";
import All from "../Pages/Friends/All.tsx";
import AddFriend from "../Pages/Friends/Add.tsx";
import Pending from "../Pages/Friends/Pending.tsx";
import Requests from "../Pages/Friends/Requests.tsx";
import Zajel from "../Pages/Zajel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/user/verification",
    element: <EmailVerification />,
  },
  {
    path: "/signup/verification",
    element: <EmailVerification />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/withoutpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  { path: "profile", element: <Profile /> },
  {
    path: "/login/withoutpassword/verificationcode",
    element: <VerificationCode />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/user/Friends",

    element: <Friends />,
    children: [
      {
        path: "all",
        element: <All />,
      },
      {
        path: "add",
        element: <AddFriend />,
      },
      {
        path: "pending",
        element: <Pending />,
      },
      {
        path: "requests",
        element: <Requests />,
      },
    ],
  },
  {
    path: "/Zajel",
    element: <Zajel />,
  },
]);

export default router;
