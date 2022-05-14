import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  let { id } = useParams();
  console.log("路由传递参数", id);
  return <div>UserDetail+{id}</div>;
}
