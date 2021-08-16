module Mutations
  class CreateTodo < Mutations::BaseMutation
    argument :params, Types::Input::TodoInputTypes::TodoContentInputType, required: true

    field :todo, Types::TodoType, null: false

    def resolve(params:)
      req_params = Hash params

      p req_params[:img_url] + "<<<<<<<<<<<<<<<<<<<<< img_url_old"
      unless req_params[:img_url].nil?
        req_params[:img_url] = ImageUploadWorker.perform_async(req_params[:img_url])
      end
      p req_params[:img_url] + "<<<<<<<<<<<<<<<<<<<<< img_url_new"

      begin
        { todo: Api::Todo.create(req_params) }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
