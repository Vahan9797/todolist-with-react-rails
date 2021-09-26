module Queries
  class FetchTodos < Queries::BaseQuery
    type [Types::TodoType], null: false

    def resolve
      Todo.all
    end
  end
end
