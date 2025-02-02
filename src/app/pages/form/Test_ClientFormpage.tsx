import { Button, Flex, Form, Input, Select } from "antd";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

const TestFormPage = () => {
  const [form] = Form.useForm();

  const cloud = useCKEditorCloud({
    version: "44.1.0",
    premium: true,
  });

  if (cloud.status === "error") {
    return <div>Error!</div>;
  }

  if (cloud.status === "loading") {
    return <div>Loading...</div>;
  }

  const { ClassicEditor, Essentials, Paragraph, Bold, Italic } = cloud.CKEditor;

  const { FormatPainter } = cloud.CKEditorPremiumFeatures;

  return (
    <>
      <Form
        form={form}
        scrollToFirstError={{ behavior: "instant", block: "end", focus: true }}
        style={{ paddingBlock: 32 }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          name="username"
          label="게시글 제목"
          rules={[{ required: true }]}
        >
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

        <Form.Item wrapperCol={{ offset: 6 }}>
          <style>{`.ck-editor__editable_inline { min-height: 400px; max-width: 1080px; }`}</style>
          <style>{`.ck-editor__top { max-width: 1200px;}`}</style>
          <CKEditor
            editor={ClassicEditor}
            data={"<p>Hello world!</p>"}
            config={{
              licenseKey: "<YOUR_LICENSE_KEY>",
              plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
              toolbar: [
                "undo",
                "redo",
                "|",
                "bold",
                "italic",
                "|",
                "formatPainter",
              ],
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6 }}>
          <Flex gap="small">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button danger onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
};

export default TestFormPage;
