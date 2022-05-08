import { useState } from "react";
import { useEffect } from "react";
import request from "./http/request";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import Profile from "./pages/profile/Profile";
import System from "./pages/system/System";
import { I18nPropvider, LOCALES } from "./i18nProvider";
import translate from "./i18nProvider/translate";
interface Props {
  name: string;
}
const App = (props: Props) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    void (async () => {
      const res = await request.other.getData();
      console.log("请求结果", res);
      const user = await request.user.getUser();
      console.log("请求结果", user);
    })();
  }, []);
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <>
      <I18nPropvider locale={locale}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/description:id" element={<Description />} />
          <Route
            path="/system"
            element={
              isAdmin ? (
                <System />
              ) : (
                <p
                  style={{
                    background: "#9b2723",
                    color: "white",
                    height: "70px",
                    lineHeight: "70px",
                    padding: "5px",
                  }}
                >
                  对不起您无权访问改页面!
                </p>
              )
            }
          />
          <Route path="*" element={<p>ERROR-PAGE</p>} />
        </Routes>
        <h2>{translate("hello")}</h2>
        <button
          style={{
            width: "430px",
            height: "40px",
            color: "white",
            background: "green",
          }}
          onClick={() => setIsAdmin(true)}
        >
          申请访问权限
        </button>

        <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
        <button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
        <button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
      </I18nPropvider>
    </>
  );
};
export default App;
