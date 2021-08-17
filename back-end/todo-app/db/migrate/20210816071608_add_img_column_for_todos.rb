# frozen_string_literal: true

class AddImgColumnForTodos < ActiveRecord::Migration
  def change
    add_column :api_todos, :img_url, :string, required: false
  end
end
