import { Popconfirm, Button } from 'antd';

const TABLE_COLUMNS = (clickHandler, deleteFunc) => {
  return [
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      width: "88%",
      align: "center"
    },

    {
      title: "Checked",
      dataIndex: "checked",
      key: "checked",
      width: "12%",
      align: "center"
    },

    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm title="Are you sure to delete this todo?" onConfirm={() => deleteFunc(record.id)} okText="Yes" cancelText="No">
            <Button type="danger" onClick={clickHandler}>Delete</Button>
        </Popconfirm>
      ),
    },
  ]
}

export { TABLE_COLUMNS }