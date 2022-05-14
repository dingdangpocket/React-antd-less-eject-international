import translate from "@/i18nProvider/translate";
import CommonModelForm from "@/components/commonModelForm/CommonModelForm";
import { TreeSelect } from "antd";
import { useState } from "react";
import { Link} from "react-router-dom";
import UserPasswordRouter from "@/router/home/userManage/userPassword/userPasswordRouter";
const { SHOW_PARENT } = TreeSelect;
export default function UserPassword() {
  const treeData = [
    {
      title: "北京",
      value: "beijing",
      key: "beijing",
      children: [
        {
          title: "朝阳区",
          value: "chaoyang",
          key: "chaoyang",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
      key: "0-1",
      children: [
        {
          title: "Child Node3",
          value: "0-1-0",
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: "0-1-1",
          key: "0-1-1",
        },
        {
          title: "Child Node5",
          value: "0-1-2",
          key: "0-1-2",
        },
      ],
    },
  ];

  const [visiable, setVisiable] = useState(false);
  const [formOptions] = useState({
    modelTitle: "新增文件",
    formItems: [
      {
        type: "input",
        label: "姓名",
        name: "name",
        required: true,
        message: "请输入姓名",
      },
      {
        type: "checkbox",
        tip: "记住密码",
        name: "checked",
      },
    ],
  });
  const showModel = () => {
    setVisiable(true);
  };
  const closeModel = () => {
    setVisiable(false);
  };
  const getModelFormValues = (values: any) => {
    console.log(values);
  };
  const onChange = (value: string[]) => {
    console.log(value);
  };

  // const filterTreeNode = (inputValue: string, treeNode: any) => {
  //   return treeNode.title.indexOf(inputValue) !== -1;
  // };

  return (
    <>
      <div>用户密码</div>
      <TreeSelect
        showSearch
        showCheckedStrategy={SHOW_PARENT}
        treeData={treeData}
        treeCheckable={true}
        style={{ width: "100%" }}
        allowClear={true}
        defaultValue={["0-1"]}
        placeholder="Please select"
        onChange={(value) => onChange(value)}
        // treeCheckStrictly={true}
        // fieldNames={{ label: "tip", value: "alert", children: "items" }}
        // disabled={true}
        // bordered={true}
        // value={["0-1-0"]}
        // filterTreeNode={filterTreeNode}
        // dropdownRender={<p>2</p>}
      ></TreeSelect>
      <button onClick={() => showModel()}>新增</button>
      <CommonModelForm
        visiable={visiable}
        closeModel={closeModel}
        getModelFormValues={getModelFormValues}
        formOptions={formOptions}
      >
        <p>123</p>
      </CommonModelForm>
      <p> {translate("国际化测试")}</p>
      <p>
        <Link to={"/home/password/change"}>修改密码</Link>
        <Link to={"/home/password/reset"}>重置密码</Link>
      </p>
      <UserPasswordRouter></UserPasswordRouter>
    </>
  );
}
