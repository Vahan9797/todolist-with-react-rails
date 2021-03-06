import { Table, message } from "antd";
import React, { useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import TodoModal from "./TodoModal";
import { TodosContext } from "../contexts/TodosContext";
import { TABLE_COLUMNS } from "../helpers/constants";
import { GET_TODOS } from "../helpers/query-constants";
import "../styles/todos.css";

const Todos = () => {
  const { data, loading, error } = useQuery(GET_TODOS);
  const [todos, setTodos] = useContext(TodosContext);

  useEffect(() => {
    if (!loading) setTodos(data.todos);
  }, [loading, data, setTodos]);

  if (error) {
    message.error(error);
  }

  return (
      <div className="todos-list">
        <Table
          className="table-striped-rows"
          dataSource={!loading ? todos : []}
          loading={loading}
          columns={TABLE_COLUMNS()}
          pagination={{ pageSize: 5 }}
          rowKey="id"
        />

        <TodoModal reloadTodos={() => console.log("reload Todos.")} />
      </div>
  );
};

export default Todos;
