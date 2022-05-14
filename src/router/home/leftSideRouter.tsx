import { Routes, Route } from "react-router-dom";
import { rootRouterConfig } from "@/routerConfig/routerConfig";

export default function LeftSideRouter() {
  return (
    <>
      <Routes>
        {rootRouterConfig.map((item: any, index: number) => {
          if (item.path === "/home/*"&&item.children) {
            item.children.map((child: any, key: number) => {
              delete item.children;
              return <Route {...child} key={index} />;
            });
          }
        })}
        {/* <Route path="/*" element={<Navigate to={"/home/password"} />} />
        <Route path="password" element={<UserPassword />} />
        <Route path="userfile" element={<UserFile />} />
        <Route path="*" element={<p>ERROR-PAGE</p>} /> */}
      </Routes>
    </>
  );
}
