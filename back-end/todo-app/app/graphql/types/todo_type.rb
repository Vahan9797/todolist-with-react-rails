# frozen_string_literal: true

module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :content, String, null: false
    field :img_url, String, null: true
    field :img_is_compressed, Boolean, null: true
    field :checked, Boolean, null: true
  end
end
