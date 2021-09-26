# frozen_string_literal: true

module Mutations
  class UpdateTodo < Mutations::BaseMutation
    argument :params, Types::Input::TodoInputTypes::TodoUpdateInputType, required: true

    field :todo, Types::TodoType, null: false

    def resolve(params:)
      req_params = Hash params

      begin
        { todo: Todo.update(req_params[:id], {
          content: req_params[:content],
          img_url: req_params[:img_url],
          img_is_compressed: req_params[:img_is_compressed],
          checked: req_params[:checked]
        }) }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
