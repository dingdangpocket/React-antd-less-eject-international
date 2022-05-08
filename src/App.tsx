import { useEffect } from "react";
import request from "./http/request";
import RootRouter from "./router/rootRouter";
interface Props {
  name: string;
}
const App = (props: Props) => {
  useEffect(() => {
    void (async () => {
      const res = await request.other.getData();
      console.log("请求结果", res);
      const user = await request.user.getUser();
      console.log("请求结果", user);
    })();
  }, []);
  return (
    <>
      <RootRouter></RootRouter>
    </>
  );
};
export default App;
