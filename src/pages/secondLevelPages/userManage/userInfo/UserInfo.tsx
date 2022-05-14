// import UserInfoRouter from '@/router/home/userManage/userInfo/userInfoRouter'
import React from "react";
import UserInfoRouter from "@/router/home/userManage/userInfo/userInfoRouter";
import { Link } from "react-router-dom";

export default function UserInfo() {
  return (
    <div>
      用户资料
      <p>
        <Link to={`/home/userManage/userInfo/detail:${100}`}>详情</Link>
      </p>
      <UserInfoRouter></UserInfoRouter>
    </div>
  );
}
