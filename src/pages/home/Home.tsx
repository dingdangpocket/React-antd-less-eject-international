import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import styles from "./Home.module.less";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideRouter from "@/router/home/leftSideRouter";

export default function Home() {
  let navigate = useNavigate();
  const { Header, Content, Sider } = Layout;
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const items2 = [
    {
      title: "用户管理",
      icon: UserOutlined,
      key: "1",
      children: [
        { title: "用户密码", key: "1-1" },
        { title: "用户资料", key: "1-2" },
      ],
    },
    {
      title: "电脑管理",
      key: "2",
      icon: LaptopOutlined,
      children: [
        { title: "电脑信息", key: "2-1" },
        { title: "电脑资料", key: "2-2" },
      ],
    },
    {
      title: "通知管理",
      key: "3",
      icon: NotificationOutlined,
      children: [
        { title: "通知信息", key: "3-1" },
        { title: "通知资料", key: "3-2" },
      ],
    },
  ].map((item) => {
    return {
      key: item.key,
      icon: React.createElement(item.icon),
      label: item.title,
      children: item.children?.map((child) => {
        return {
          key: child.key,
          label: child.title,
        };
      }),
    };
  });
  useEffect(() => {
    navigate("/home/password");
  }, []);
  const checkHandle = ({ item, key, keyPath, domEvent }: any) => {
    if (key === "1-1") {
      navigate("/home/password");
    }
    if (key === "1-2") {
      navigate("/home/userfile");
    }
    console.log(key);
  };
  return (
    <>
      <Layout className={styles.main}>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1-1"]}
              defaultOpenKeys={["1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              onClick={({ key, keyPath, domEvent }) =>
                checkHandle({ key, keyPath, domEvent })
              }
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <LeftSideRouter></LeftSideRouter>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

// import React, { useContext } from "react";
// import { Route, Routes } from "react-router-dom";
// import Password from "./password/Password";
// import { useNavigate } from "react-router-dom";
// import Side from "@/pages/side/Side";
// import { ContentContext } from "../../context/ContextProvider";
// import styles from "./Home.module.less";
// import UserInfo from "@/components/UserInfo";
// import { useDispatch, useSelector } from "react-redux";
// import translate from "@/i18nProvider/translate";
// import {Button} from "antd"
// import customStyle from "./customStyle";

// export default function Home() {
//   const { state, dispatch } = useContext(ContentContext);
//   let navigate = useNavigate();

//   const count = useSelector<any>((state) => {
//     console.log("状态机数据", state);
//     return state.counts;
//   });
//   console.log(count);

//   const goDescription = () => {
//     navigate("/description" + 2190867637637);
//   };
//   const goPassWord = () => {
//     navigate("/home/password");
//   };
//   const closePassWord = () => {
//     navigate(-1);
//   };
//   const changeToRed = () => {
//     dispatch({ type: "changeToRed", color: "red" });
//   };
//   const changeToBlue = () => {
//     dispatch({ type: "changeToOrange", color: "orange" });
//   };
//   const goSystem = () => {
//     navigate("/system");
//   };

//   return (
//     <div>
//       <div className={styles.context}>
//         <p style={{ color: `${state.colorValue}` }}>
//           Context数据:{JSON.stringify(state)}
//         </p>
//         <h2 style={{color:"red"}}>{translate("您好")}</h2>
//         <h2 style={{color:"red"}}>{translate("北京")}</h2>
//       </div>
//       <div className={styles.homePage}>主页HOMEPAGE</div>
//       <h2>{translate("您好")}</h2>
//       <h2>{translate("北京")}</h2>
//       <div className={styles.buttonArea}>
//         <button className={styles.btn} onClick={() => changeToRed()}>
//           dispatchContext-changeToRed
//         </button>
//         <button className={styles.btn} onClick={() => changeToBlue()}>
//           dispatchContext-changeToOrange
//         </button>
//         <button className={styles.btn} onClick={() => goSystem()}>
//           进入权限路由
//         </button>
//         <button className={styles.btn} onClick={() => goDescription()}>
//           跳转至详情
//         </button>
//         <button className={styles.btn} onClick={() => goPassWord()}>
//           打开二级路由,显示密码
//         </button>
//         <button className={styles.btn} onClick={() => closePassWord()}>
//           关闭二级路由
//         </button>
//       </div>
//       <Button style={customStyle.btn} disabled={true}  type="primary">ANTD</Button>
//       <UserInfo id={1} name={"dingdang"} age={18} adress={"成都"} />
//       <Routes>
//         <Route path="password" element={<Password />} />
//       </Routes>
//       <Routes>
//         <Route path="Side" element={<Side />} />
//       </Routes>
//     </div>
//   );
// }
