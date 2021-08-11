import { Table, message, Popconfirm, Button } from "antd";
import React, { Component } from "react";
import AddTodoModal from "./AddTodoModal";
import '../styles/todos.css';

class Todos extends Component {
  columns = [
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
        <Popconfirm title="Are you sure to delete this todo?" onConfirm={() => this.deleteTodo(record.id)} okText="Yes" cancelText="No">
            <Button type="danger" onClick={this.handleClick}>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  state = {
    todos: [],
  };

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos = () => {
    fetch("api/todos/index")
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        data.forEach((todo) => {
          const newEl = {
            key: todo.id,
            id: todo.id,
            content: todo.content,
            checked: todo.checked,
          };

          this.setState(prevState => ({
            todos: [...prevState.todos, newEl],
          }));
        });
      })
      .catch(err => message.error("Error: " + err));
  };

  reloadTodos = () => {
    this.setState({ todos: [] });
    this.loadTodos();
  };

  deleteTodo = id => {
    fetch(`api/todos/${id}`, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadTodos();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    return (
      <div className="todos-list">
        <Table className="table-striped-rows" dataSource={this.state.todos} columns={this.columns} pagination={{ pageSize: 5 }} />

        <AddTodoModal reloadTodos={this.reloadTodos} />
      </div>
    );
  }
}

export default Todos;