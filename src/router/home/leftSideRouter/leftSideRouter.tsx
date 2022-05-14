import { Routes, Route } from "react-router-dom";
import { rootRouterConfig } from "@/routerConfig/routerConfig";
import { useMemo } from "react";
export default function LeftSideRouter() {
  const leftSideRouterConfig:any = useMemo(() => {
    const leftSideRouter=rootRouterConfig.find(x =>  x.path === "/home/*")
    return leftSideRouter
  }, []); 
  return (
    <>
      <Routes>
        {leftSideRouterConfig?.children.map((item:any,index:number) => {
            return ( <Route path={item.path} element={item.element} key={index}/>)
        })}
      </Routes>
    </>
  );
}