"use client";

import React, { useRef } from "react";
import { Form, Input, Select } from "antd";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const CustomEditor = () => {
  const [form] = Form.useForm();

  const editorRef = useRef<Editor>(null);

  return (
    <>
      <Form
        form={form}
        scrollToFirstError={{ behavior: "instant", block: "end", focus: true }}
        style={{ paddingBlock: 32 }}
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item name="username" label="제목" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="태그" name="tags">
          <Select
            options={[
              { label: "자유글", value: "tag1" },
              { label: "기술지식", value: "tag2" },
              { label: "QnA", value: "tag3" },
            ]}
          />
        </Form.Item>
      </Form>
      <div>
        <Editor
          ref={editorRef}
          initialValue="Hello, Toast UI Editor!"
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
      </div>
    </>
  );
};

export default CustomEditor;
