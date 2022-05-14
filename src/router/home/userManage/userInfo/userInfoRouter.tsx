import { rootRouterConfig } from "@/routerConfig/routerConfig";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

export default function UserInfoRouter() {
  const UserInfoRouterConfig: any = useMemo(() => {
    const userInfoRouter = rootRouterConfig
      .find((x) => x.path === "/home/*")
      ?.children?.find((x) => x.path === "userManage/userInfo/*");
    return userInfoRouter;
  }, []);

  return (
    <Routes>
      {UserInfoRouterConfig.children.map((item: any, index: number) => {
        return <Route path={item.path} element={item.element} key={index} />;
      })}
    </Routes>
  );
}
