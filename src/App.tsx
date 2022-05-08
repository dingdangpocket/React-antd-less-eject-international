import { useState } from "react";
import { useEffect } from "react";
import request from "./http/request";
import { I18nPropvider, LOCALES } from "./i18nProvider";
import translate from "./i18nProvider/translate";
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
  const [locale, setLocale] = useState(LOCALES.CHINESE);
  return (
    <>
      <I18nPropvider locale={locale}>
        <RootRouter></RootRouter>
        {/* <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
        <button onClick={() => setLocale(LOCALES.CHINESE)}>Chinese</button> */}
      </I18nPropvider>
    </>
  );
};
export default App;
