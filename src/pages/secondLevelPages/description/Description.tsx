import { descriptionRouterConfig } from "@/routerConfig/routerConfig";
import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

export default function Description() {
  let { id } = useParams();
  console.log("路由传递参数", id);
  return (
    <div>
      description
      <Link to={"/home/description:id/list"}>详情列表</Link>
      <Routes>
        {descriptionRouterConfig.map((item: any, index: number) => {
          return <Route {...item} key={index}></Route>;
        })}
      </Routes>
    </div>
  );
}
