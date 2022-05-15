import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import request from "./http/request";
import { rootRouterConfig, RoutesItems } from "@/routerConfig/routerConfig";
interface Props {
  name: string;
}
const App = (props: Props) => {
  useEffect(() => {
    // renderRoutes(rootRouterConfig);
    void (async () => {
      const res = await request.other.getData();
      console.log("请求结果", res);
      const user = await request.user.getUser();
      console.log("请求结果", user);
    })();
  }, []);

  const renderRoutes = (routes: RoutesItems[]) => {
    return routes.map((item: RoutesItems, index: number) => {
      if (item && item.children) {
        return (
          <Route path={item.path} element={item.element} key={index}>
            {renderRoutes(item.children)}
          </Route>
        );
      } else {
        return (
          <Route path={item.path} element={item.element} key={index}></Route>
        );
      }
    });
  };
  return (
    <>
      <Routes>{renderRoutes(rootRouterConfig)}</Routes>
    </>
  );
};
export default App;
