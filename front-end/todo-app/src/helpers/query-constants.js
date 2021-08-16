import { gql } from '@apollo/client';

const GET_TODOS = gql`
    query {
        todos {
            id
            content
            checked
        }
    }
`

const CREATE_TODO = gql`
    mutation($content: String!) {
        createTodo(input: { params: { content: $content }}) {
            todo {
                id
                content
                checked
            }
        }
    }
`

const UPDATE_TODO = gql`
    mutation($id: ID!, $content: String!, $checked: Boolean) {
        updateTodo(input: { params: { id: $id, content: $content, checked: $checked } }) {
            todo {
                id
                content
                checked
            }
        }
    }
`

const DELETE_TODO = gql`
    mutation($id: ID!) {
        deleteTodo(input: { params: { id: $id }}) {
            id
        }
    }
`

export { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO }