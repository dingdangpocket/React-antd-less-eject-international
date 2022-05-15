import { ContentContext } from "@/context/ContextProvider";
import { useContext } from "react";
export default function useRouterAuth(currentPathname:string) {
  const { state } = useContext(ContentContext);
  console.log("登陆账号路由权限列表", state.routerPermissions,"当前进入的路由地址",currentPathname);
  const AuthResult: boolean = state.routerPermissions.find(
    (x: string) => x === currentPathname
  )
    ? true
    : false;
  return {
    AuthResult,
  };
}
