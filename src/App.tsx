import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import request from "./http/request";
import { RoutesItems } from "@/routerConfig/routerConfig";
import { ContentContext } from "./context/ContextProvider";
interface Props {
  name: string;
}
const App = (props: Props) => {
  const { state, dispatch } = useContext(ContentContext);
  //api...
  useEffect(() => {
    dispatch({
      type: "userRouterPermissions",
      payload: [
        "/home/computerManage/computerInfo",
        "/home/userManage/userPassword",
        "/home/userManage/userInfo",
        "/home/userManage/userInfo/detail",
        "/home/computerManage/computerInfo",
        "/home/computerManage/computerDevice",
        "/home/notifyManage/notifyInfo",
        "/home/notifyManage/notifyData",
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Routes>{renderRoutes(state.routerConfig)}</Routes>
    </>
  );
};
export default App;
