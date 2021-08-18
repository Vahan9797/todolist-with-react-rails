import { Popconfirm, Button, Checkbox } from "antd";
import TodoModal from "../components/TodoModal";

const TABLE_COLUMNS = (clickHandler, deleteFunc) => {
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
      render: (_text, record) => <TodoModal editModal={true} />,
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this todo?"
          onConfirm={() => deleteFunc(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" onClick={clickHandler}>
            DELETE
          </Button>
        </Popconfirm>
      ),
    },
  ];
};

export { TABLE_COLUMNS };
