import { Navigate } from "react-router-dom";
import Loadable from "react-loadable";
import { useState } from "react";
const LoadingTip = () => <div>加载路由ing...</div>;
const Login = Loadable({
  loader: () => import("@/pages/rootLevelPages/login/Login"),
  loading: LoadingTip,
});
const Home = Loadable({
  loader: () => import("@/pages/rootLevelPages/home/Home"),
  loading: LoadingTip,
});
const UserPassword = Loadable({
  loader: () =>
    import("@/pages/secondLevelPages/userManage/userPassword/UserPassword"),
  loading: LoadingTip,
});

const UserInfo = Loadable({
  loader: () => import("@/pages/secondLevelPages/userManage/userInfo/UserInfo"),
  loading: LoadingTip,
});

const UserDetail = Loadable({
  loader: () =>
    import(
      "@/pages/thirdLevelPages/home-userManage-userInfo/userDetail/UserDetail"
    ),
  loading: LoadingTip,
});

const AvatorDetail = Loadable({
  loader: () =>
    import(
      "@/pages/thirdLevelPages/home-userManage-userInfo/avatorDetail/AvatorDetail"
    ),
  loading: LoadingTip,
});

const ComputerInfo = Loadable({
  loader: () =>
    import("@/pages/secondLevelPages/computerManage/computerInfo/ComputerInfo"),
  loading: LoadingTip,
});

const ComputerDevice = Loadable({
  loader: () =>
    import(
      "@/pages/secondLevelPages/computerManage/computerDevice/ComputerDevice"
    ),
  loading: LoadingTip,
});

const NotifyInfo = Loadable({
  loader: () =>
    import("@/pages/secondLevelPages/notifyManage/notifyInfo/NotifyInfo"),
  loading: LoadingTip,
});

const NotifyData = Loadable({
  loader: () =>
    import("@/pages/secondLevelPages/notifyManage/notifyData/NotifyData"),
  loading: LoadingTip,
});
export type RoutesItems = {
  path: string;
  element: React.ReactElement;
  children?: RoutesItems[];
};
export const rootRouterConfig: RoutesItems[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <Navigate to={"/home/userManage/userPassword"} />,
      },
      {
        path: "userManage/userPassword",
        element: <UserPassword />,
        children: [
          { path: "change", element: <p>修改密码页面</p> },
          { path: "reset", element: <p>重置密码页面</p> },
          { path: "fingerprint", element: <p>指纹密码页面</p> },
        ],
      },
      {
        path: "userManage/userInfo",
        element: <UserInfo />,
        children: [
          {
            path: "detail:id",
            element: <UserDetail />,
          },
          {
            path: "avator:id",
            element: <AvatorDetail />,
          },
        ],
      },
      {
        path: "computerManage/computerInfo",
        element: <ComputerInfo />,
      },
      {
        path: "computerManage/computerDevice",
        element: <ComputerDevice />,
      },
      {
        path: "notifyManage/notifyInfo",
        element: <NotifyInfo />,
      },
      {
        path: "notifyManage/notifyData",
        element: <NotifyData />,
      },
      { path: "*", element: <p>ERROR-PAGE</p> },
    ],
  },
  { path: "*", element: <p>ERROR-PAGE;</p> },
  { path: "error", element: <p>ERROR-PAGE-对不起-您没有该路由权限;</p> },
];
// eslint-disable-next-line react-hooks/rules-of-hooks
