import { gql } from '@apollo/client';

const GET_TODOS = gql`
    query {
        todos {
            id
            content
            imgUrl
            checked
        }
    }
`

const CREATE_TODO = gql`
    mutation($content: String!, $imgUrl: String) {
        createTodo(input: { params: { content: $content, imgUrl: $imgUrl }}) {
            todo {
                id
                content
                imgUrl
                checked
            }
        }
    }
`

const UPDATE_TODO = gql`
    mutation($id: ID!, $content: String!, $imgUrl: String, $checked: Boolean) {
        updateTodo(input: { params: { id: $id, content: $content, imgUrl: $imgUrl, checked: $checked } }) {
            todo {
                id
                content
                imgUrl
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