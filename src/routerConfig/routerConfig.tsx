import Home from "@/pages/rootLevelPages/home/Home";
import Login from "@/pages/rootLevelPages/login/Login";
import Description from "@/pages/secondLevelPages/description/Description";
import UserInfo from "@/pages/secondLevelPages/userManage/userInfo/UserInfo";
import UserPassword from "@/pages/secondLevelPages/userManage/userPassword/UserPassword";
import DescriptionList from "@/pages/thirdLevelPages/description-list/DescriptionList";
import PasswordChange from "@/pages/thirdLevelPages/password-change/PasswordChange";
import PasswordReset from "@/pages/thirdLevelPages/password-reset/PasswordReset";
import { Navigate } from "react-router-dom";

export const rootRouterConfig = [
  { path: "/", element: <Login /> },
  {
    path: "/home/*",
    element: <Home />,
    children: [
      { path: "/*", element: <Navigate to={"/home/password"} /> },
      {
        path: "password/*",
        element: <UserPassword />,
        children: [
          { path: "change", element: <PasswordChange /> },
          { path: "reset", element: <PasswordReset /> },
        ],
      },
      { path: "userInfo", element: <UserInfo/> },
      {
        path: "description:id/*",
        element: <Description />,
        children: [{ path: "list", element: <DescriptionList /> }],
      },
      { path: "*", element: <p>ERROR-PAGE</p> },
    ],
  },
  { path: "*", element: <p>ERROR-PAGE</p> },
];
