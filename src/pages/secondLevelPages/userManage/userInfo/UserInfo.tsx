// import UserInfoRouter from '@/router/home/userManage/userInfo/userInfoRouter'
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function UserInfo() {
  return (
    <div>
      用户资料
      <p>
        <Link to={`/home/userManage/userInfo/detail${100}`}>资料详情</Link>
        <Link to={`/home/userManage/userInfo/avator${100}`}>头像详情</Link>
      </p>
      <Outlet />
    </div>
  );
}
