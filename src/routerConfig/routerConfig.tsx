import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Description from "@/pages/secondLevelPages/description/Description";
import UserFile from "@/pages/secondLevelPages/userManage/userFile/UserFile";
import UserPassword from "@/pages/secondLevelPages/userManage/userPassword/UserPassword";
import DescriptionList from "@/pages/thirdLevelPages/description-list/DescriptionList";
import PasswordChange from "@/pages/thirdLevelPages/password-Change/PasswordChange";
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
        ],
      },
      { path: "userfile", element: <UserFile /> },
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
