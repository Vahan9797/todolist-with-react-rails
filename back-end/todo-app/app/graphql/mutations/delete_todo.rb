module Mutations
  class DeleteTodo < Mutations::BaseMutation
    argument :params, Types::Input::TodoInputTypes::TodoIDInputType, required: true

    field :id, ID, null: false

    def resolve(params:)
      Todo.delete(params[:id]) && { id: params[:id] }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
        " #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
