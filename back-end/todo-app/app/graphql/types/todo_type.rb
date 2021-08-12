module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :content, String, null: false
    field :checked, Boolean, null: true
  end
end
