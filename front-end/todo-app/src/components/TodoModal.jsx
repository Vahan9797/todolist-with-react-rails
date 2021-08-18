import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState, createRef } from "react";

const TodoModal = (props) => {
  const formRef = createRef();
  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    // fetch("api/todos/", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then((data) => {
    //     if (data.ok) {
    //       handleCancel();

    //       return data.json();
    //     }
    //     throw new Error("Network error.");
    //   })
    //   .then(() => {
    //     this.props.reloadTodos();
    //   })
    //   .catch((err) => console.error("Error: " + err));
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type={props.editModal ? "ghost" : "primary"} onClick={showModal}>
        {props.editModal ? "EDIT" : "CREATE NEW"}
        {!props.editModal && <PlusOutlined />}
      </Button>

      <Modal
        title={props.editModal ? "EDIT TODO" : "ADD NEW TODO"}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form ref={formRef} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
                message: "Please input the action you need To Do.",
              },
            ]}
          >
            <Input placeholder='Input your "to do" action...' />
          </Form.Item>
          <Form.Item name="img" label="Image" rules={[{ required: false }]}>
            <Upload
              accept=".png,.jpg,.jpeg,.bmp"
              listType="picture"
              fileList={fileList}
              onChange={(e) => setFileList(e.fileList)}
            >
              <Button>
                <UploadOutlined />
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TodoModal;
