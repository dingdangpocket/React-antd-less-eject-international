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
      { path: "/*", element: <Navigate to={"/home/userManage/userPassword"} /> },
      {
        path: "userManage/userPassword/*",
        element: <p>用户密码</p>,
        children: [
          { path: "change", element:<p>修改密码</p>},
          { path: "reset", element: <p>重置密码</p>},
        ],
      },
      {
        path: "userManage/userInfo/*",
        element: <p>用户资料</p>,
      },
      {
        path: "computerManage/computerInfo/*",
        element: <p>电脑资料</p>,
      },
      {
        path: "computerManage/computerDevice/*",
        element: <p>电脑设备</p>,
      },
      {
        path: "notifyManage/notifyInfo/*",
        element: <p>通知信息</p>,
      },
      {
        path: "notifyManage/notifyData/*",
        element: <p>通知资料</p>,
      },
      { path: "*", element: <p>ERROR-PAGE</p> },
    ],
  },
  { path: "*", element: <p>ERROR-PAGE</p> },
];
