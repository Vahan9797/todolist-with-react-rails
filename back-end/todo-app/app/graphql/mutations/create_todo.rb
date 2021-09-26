module Mutations
  class CreateTodo < Mutations::BaseMutation
    argument :params, Types::Input::TodoInputTypes::TodoContentInputType, required: true

    field :todo, Types::TodoType, null: false

    def resolve(params:)
      req_params = Hash params

      begin
        { todo: Todo.create(req_params) }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
