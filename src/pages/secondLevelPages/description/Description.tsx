import { rootRouterConfig } from "@/routerConfig/routerConfig";
import { Link, Route, Routes, useParams } from "react-router-dom";

export default function Description() {
  let { id } = useParams();
  console.log("路由传递参数", id);
  return (
    <div>
      description
      <Link to={"/home/description:id/list"}>详情列表</Link>
      <Routes>
        {rootRouterConfig.map((item: any, index: number) => {
          if (item.path === "/home/*"&&item.children) {
            item.children.map((child: any, key: number) => {
              if (child.path === "description:id/*"&&item.children) {
                child.children.map((i: any, d: number) => {
                  return <Route {...i} key={d} />;
                });
              }
            });
          }
        })}
        {/* <Route path="/*" element={<Navigate to={"/home/password"} />} />
        <Route path="password" element={<UserPassword />} />
        <Route path="userfile" element={<UserFile />} />
        <Route path="*" element={<p>ERROR-PAGE</p>} /> */}
      </Routes>
    </div>
  );
}
