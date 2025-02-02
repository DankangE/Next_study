"use client";

import React from "react";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload, Form, Space } from "antd";

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const props: UploadProps = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/xxx.png", // custom error link to show
    },
  ],
};

const ClientFormFooter: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, unknown>) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Title level={2}></Title>
      <Title level={3}>첨부파일</Title>
      <Title level={5}>
        - 문서 첨부 제한 : 248Bytes/5.00MB | 파일 제한 크기 : 5.00MB
        <br />- 첨부 파일은 작성자와 관리자에게만 노출됩니다.
      </Title>
      <br />
      <Upload {...props} style={{ width: "auto", maxWidth: "300px" }}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <br />
      <br />
      <hr /> {/* divider */}
      <br />
      <br />
      <div style={{ position: "relative", top: "30px" }}>
        {" "}
        {/* grid */}
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "50px",
            maxWidth: 300,
          }}
        >
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit" size="large">
                저장하기
              </Button>
              <Button htmlType="button" onClick={onReset} size="large">
                취소
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ClientFormFooter;
