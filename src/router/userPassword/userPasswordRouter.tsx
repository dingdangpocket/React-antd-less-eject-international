import { rootRouterConfig } from "@/routerConfig/routerConfig";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

export default function UserPasswordRouter() {
  const userPasswordRouterConfig: any = useMemo(() => {
    const userPasswordRouter = rootRouterConfig
      .find((x) => x.path === "/home/*")
      ?.children?.find((x) => x.path === "password/*");
    return userPasswordRouter;
  }, []);

  return (
    <Routes>
      {userPasswordRouterConfig.children.map((item: any, index: number) => {
        console.log(item);
        return <Route path={item.path} element={item.element} key={index} />;
      })}
    </Routes>
  );
}
