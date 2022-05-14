import { Routes, Route } from "react-router-dom";
import { leftSideRouterConfig } from "@/routerConfig/routerConfig";
export default function LeftSideRouter() {
  return (
    <>
      <Routes>
        {leftSideRouterConfig.map((item: any,index:number) => {
          return <Route {...item} key={index}/>;
        })}
      </Routes>
    </>
  );
}
