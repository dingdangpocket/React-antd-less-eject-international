import UserFile from "@/pages/secondLevelPages/userManage/userFile/UserFile";
import UserPassword from "@/pages/secondLevelPages/userManage/userPassword/UserPassword";
import { Routes, Route, Navigate } from "react-router-dom";
export default function LeftSideRouter() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to={"/home/password"} />} />
        <Route path="password" element={<UserPassword />} />
        <Route path="userfile" element={<UserFile />} />
        <Route path="*" element={<p>ERROR-PAGE</p>} />
      </Routes>
    </>
  );
}
