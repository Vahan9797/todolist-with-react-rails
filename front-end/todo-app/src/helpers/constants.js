import { Popconfirm, Button, Checkbox, message } from "antd";
import TodoModal from "../components/TodoModal";
import { useMutation } from "@apollo/client";
import { DELETE_TODO, UPDATE_TODO } from "./query-constants";
import useTodosContext from "../contexts/useTodosContext";

const TABLE_COLUMNS = onDeleteRow => {
  const [deleteFunc, { loading, error }] = useMutation(DELETE_TODO);
  const [checkedFunc] = useMutation(UPDATE_TODO);
  const { deleteTodo, updateChecked } = useTodosContext();

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
      render: (value, record) => (
        <Checkbox
          checked={record.checked}
          onChange={({ target }) => {
            checkedFunc({ variables: { id: record.id, content: record.content, checked: target.checked }})
              .then(data => updateChecked(data))
          }}
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
          onConfirm={() => deleteFunc({variables: { id: +record.id }}).then(data => deleteTodo(data))}
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
