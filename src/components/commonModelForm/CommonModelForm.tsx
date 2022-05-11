import { Form, Input, Checkbox, Modal } from "antd";
import { createRef } from "react";

export type Props = {
  visiable: boolean;
  closeModel: () => void;
  getModelFormValues: (values: any) => void;
  formOptions: any;
};

export default function CommonModelForm(props: Props) {
  const { visiable, closeModel, getModelFormValues, formOptions } = props;
  console.log(formOptions);
  const formRef = createRef<any>();
  const handleCancel = () => {
    closeModel();
  };
  const handleOk = () => {
    getModelFormValues(formRef.current.getFieldValue());
    closeModel();
  };
  return (
    <div>
      <Modal
        title={formOptions.modelTitle}
        visible={visiable}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"确认提交"}
        cancelText={"取消"}
      >
        <Form
          ref={formRef}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
        >
          {formOptions.formItems.map((item: any) => {
            if (item.type === "input") {
              return (
                <Form.Item
                  label={item.label}
                  name={item.name}
                  rules={[
                    {
                      required: item.required,
                      message: item.message,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              );
            }
            if (item.type === "checkbox") {
              return (
                <Form.Item
                  name={item.name}
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>{item.tip}</Checkbox>
                </Form.Item>
              );
            }
          })}
        </Form>
      </Modal>
    </div>
  );
}
