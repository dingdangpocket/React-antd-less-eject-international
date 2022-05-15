// import UserInfoRouter from '@/router/home/userManage/userInfo/userInfoRouter'
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import { ConfigProvider, Radio, DatePicker, Pagination } from "antd";

export default function UserInfo() {
  const [locale, setLocale] = useState<any>("enUS");
  const changeLocale = (e: any) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
    if (!localeValue) {
      // 目标为切换至  英语
      moment.locale("en");
    } else {
      // 目标为切换至  中文
      moment.locale("zh-cn");
    }
  };
  return (
    <div>
      用户资料
      <div>
        <div className="change-locale">
          <Radio.Group value={locale} onChange={changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>

        <ConfigProvider locale={locale}>
          <>
            <DatePicker />
            <Pagination defaultCurrent={6} total={500} />
          </>
        </ConfigProvider>
      </div>
      <p>
        <Link to={`/home/userManage/userInfo/detail${100}`}>资料详情</Link>
        <Link to={`/home/userManage/userInfo/avator${100}`}>头像详情</Link>
      </p>
      <Outlet />
    </div>
  );
}
