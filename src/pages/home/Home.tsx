import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import styles from "./Home.module.less";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideRouter from "@/router/home/leftSideRouter";
import { I18nPropvider, LOCALES } from "@/i18nProvider";

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
                <LeftSideRouter></LeftSideRouter>
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
