import { Popconfirm, Button, Checkbox, message } from "antd";
import TodoModal from "../components/TodoModal";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "./query-constants";

const TABLE_COLUMNS = () => {
  const [deleteFunc, { data, loading, error }] = useMutation(DELETE_TODO);

  if(error) {
    message.error(error);
  }

  return [
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      width: "88%",
      align: "center",
    },

    {
      title: "Checked",
      dataIndex: "checked",
      key: "checked",
      width: "12%",
      align: "center",
      render: (value, record, rowIndex) => (
        <Checkbox
          checked={value}
          onChange={() => console.log(rowIndex, value)}
        />
      ),
    },
    {
      title: "",
      key: "action",
      render: _text => <TodoModal editModal={true} />,
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this todo?"
          onConfirm={() => {deleteFunc({ input: { params: { id: +record.id } }})}}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" loading={loading}>
            DELETE
          </Button>
        </Popconfirm>
      ),
    },
  ];
};

export { TABLE_COLUMNS };
