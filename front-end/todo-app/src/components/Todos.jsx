import { Table } from "antd";
import React, { Component, Fragment } from "react";
import AddTodoModal from "./AddTodoModal";
import { useQuery } from '@apollo/client';
import { TABLE_COLUMNS } from '../helpers/constants';
import { GET_TODOS } from '../helpers/query-constants'
import '../styles/todos.css';

const LoadTodos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if(loading) return <div>Loading...</div>;

  if(error) {
    console.log(error);
    return <div>Error!</div>
  }

  return <Todos data={data}/>
}

const Todos = props => (
      <div className="todos-list">
        <Table className="table-striped-rows"
          dataSource={props.todos}
          columns={TABLE_COLUMNS}
          pagination={{ pageSize: 5 }}
        />

        <AddTodoModal reloadTodos={this.reloadTodos} />
      </div>
    );

export default Todos;