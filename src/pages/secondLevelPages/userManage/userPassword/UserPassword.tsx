import translate from "@/i18nProvider/translate";
import CommonModelForm from "@/components/commonModelForm/CommonModelForm";
import { useState } from "react";

export default function UserPassword() {
  const [visiable, setVisiable] = useState(false);
  const [formOptions, setFormOptions] = useState({
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
  return (
    <>
      <div>用户密码</div>
      <button onClick={() => showModel()}>新增</button>
      <CommonModelForm
        visiable={visiable}
        closeModel={closeModel}
        getModelFormValues={getModelFormValues}
        formOptions={formOptions}
      ></CommonModelForm>
      <p> {translate("国际化测试")}</p>
    </>
  );
}
