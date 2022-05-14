import { rootRouterConfig } from "@/routerConfig/routerConfig";
import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
// import { leftSideRouterConfig } from "@/routerConfig/routerConfig";
export default function DescriptionRouter() {
  const descriptionRouterConfig: any = useMemo(() => {
    const descriptionRouter = rootRouterConfig.find((x) => x.path === "/home/*")?.children?.find(x=>x.path==="description:id/*");
    return descriptionRouter;
  }, []);
  return (
    <>
      <Routes>
        {descriptionRouterConfig.children.map((item: any, index: number) => {
          return <Route path={item.path} element={item.element} key={index} />;
        })}
      </Routes>
    </>
  );
}
