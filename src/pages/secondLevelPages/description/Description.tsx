import React from "react";
import { useParams } from "react-router-dom";

export default function Description() {
  let { id } = useParams();
  console.log("路由传递参数", id);
  return <div>description</div>;
}
