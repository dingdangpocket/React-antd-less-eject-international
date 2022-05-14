import { ReactNode, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import request from "./http/request";
import RootRouter from "./router/rootRouter";
import RouterRender from "./router/routerRender";
import { rootRouterConfig } from "@/routerConfig/routerConfig";
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
  const renderRoutes = (routes: any): any => {
   return routes.map((item: any,index:number) => {
      // if (item && item.children) {
      //   return (
      //     <Route path={item.path} element={item.element} key={index}>
      //       {renderRoutes(item.children)}
      //     </Route>
      //   );
      // } else {
        return <Route path={item.path} element={item.element} key={index}></Route>;
      // }
    });
  };
  // const data = [
  //   {
  //     id: "1",
  //     name: "lisi",
  //     children: [
  //       { id: "1-1", name: "zhangsan" },
  //       { id: "1-2", name: "wangsan" },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     name: "haicheng",
  //     children: [
  //       { id: "2-1", name: "zhoukai" },
  //       { id: "2-2", name: "huli" },
  //     ],
  //   },
  // ];
  // const render = (data: any): any => {
  //  return data.map((item: any) => {
  //     if (item && item.children) {
  //       return (
  //         <p>
  //           {render(item.children)}
  //         </p>
  //       );
  //     } else {
  //       return <p>{item.id}</p>;
  //     }
  //   });
  // };

  return (
    <>
      {/* <p>{render(data)}</p> */}
      {/* <RootRouter></RootRouter> */}
      <Routes>{renderRoutes(rootRouterConfig)}</Routes>
    </>
  );
};
export default App;
