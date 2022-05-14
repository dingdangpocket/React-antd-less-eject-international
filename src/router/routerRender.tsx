import React from "react";
import { Route } from "react-router-dom";

export default function RouterRender(props: any) {
  console.log("allRouter",props.rootRouterConfig);
  return <Route></Route>
}
