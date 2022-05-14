import { Routes, Route } from "react-router-dom";
import { leftSideRouterConfig } from "../routerConfig/routerConfig";
export default function LeftSideRouter() {
  return (
    <>
      <Routes>
        {leftSideRouterConfig.map((item: any) => {
          return <Route {...item} />;
        })}
        {/* <Route path="/*" element={<Navigate to={"/home/password"} />} />
        <Route path="password" element={<UserPassword />} />
        <Route path="userfile" element={<UserFile />} />
        <Route path="*" element={<p>ERROR-PAGE</p>} /> */}
      </Routes>
    </>
  );
}
