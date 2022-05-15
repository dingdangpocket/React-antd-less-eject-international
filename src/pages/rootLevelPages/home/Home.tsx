import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import styles from "./Home.module.less";
import React, {useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { I18nPropvider, LOCALES } from "@/i18nProvider";
import useRouterAuth from "@/commonHooks/useRouterAuth";

export default function Home(props: any) {
  let navigate = useNavigate();
  let location = useLocation();
  const { AuthResult } = useRouterAuth(location.pathname);
  if (!AuthResult) {
    navigate("/error");
  }
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
        {
          title: "用户密码",
          key: "1-1",
        },
        { title: "用户资料", key: "1-2" },
      ],
    },
    {
      title: "电脑管理",
      key: "2",
      icon: LaptopOutlined,
      children: [
        { title: "电脑资料", key: "2-1" },
        { title: "电脑设备", key: "2-2" },
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
    navigate("/home/userManage/userPassword");
  }, []);
  const checkHandle = ({ item, key, keyPath, domEvent }: any) => {
    if (key === "1-1") {
      navigate("/home/userManage/userPassword");
    }
    if (key === "1-2") {
      navigate("/home/userManage/userInfo");
    }
    if (key === "2-1") {
      navigate(`/home/computerManage/computerInfo`);
    }
    if (key === "2-2") {
      navigate(`/home/computerManage/computerDevice`);
    }
    if (key === "3-1") {
      navigate(`/home/notifyManage/notifyInfo`);
    }
    if (key === "3-2") {
      navigate(`/home/notifyManage/notifyData`);
    }
    console.log(key);
  };
  const [locale, setLocale] = useState(LOCALES.CHINESE);
  return (
    <>
      <I18nPropvider locale={locale}>
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
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </I18nPropvider>
      <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
      <button onClick={() => setLocale(LOCALES.CHINESE)}>Chinese</button>
    </>
  );
}
