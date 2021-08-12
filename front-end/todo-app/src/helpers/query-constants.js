import { gql } from '@apollo/client';

const GET_TODOS = gql`
    query GetTodoItems {

    }
`

const CREATE_TODO = gql`
    query CreateTodoItem {
        todo {
            content
        }
    }
`

const UPDATE_TODO = gql`
    query UpdateTodoItem {
        todo {
            id,
            content,
            checked
        }
    }
`

const DELETE_TODO = gql`
    query DeleteTodoItem {
        todo {
            id
        }
    }
`

export { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO }