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

       {/* <Route path={"password/*"} element={<UserPassword />} />; */}

        {/* if(item.path==="/home/*"){
         return <Route path={"password/*"} element={<UserPassword />
       } */}
        {/* {rootRouterConfig.some((item: any, index: number) => {
          if (item.path === "/home/*" && item.children) {
            item.children.map((child: any, index: number) => {
              console.log("-",child);
              return <Route path={child.path} element={child.element} key={index}/>;
            });
          }
        })} */}
        {/* <Route path="/*" element={<Navigate to={"/home/password"} />} />
        <Route path="password" element={<UserPassword />} />
        <Route path="userfile" element={<UserFile />} />
        <Route path="*" element={<p>ERROR-PAGE</p>} /> */}