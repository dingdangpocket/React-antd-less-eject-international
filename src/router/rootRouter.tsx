import { Routes, Route } from "react-router-dom";
import { rootRouterConfig } from "@/routerConfig/routerConfig";
export default function RootRouter() {
  return (
    <>
      <Routes>
        {rootRouterConfig.map((item: any, index: number) => {
          return <Route path={item.path} element={item.element} key={index}></Route>;
        })}
      </Routes>
    </>
  );
}