class CreateApiTodos < ActiveRecord::Migration
  def change
    create_table :api_todos do |t|
      t.string :content
      t.boolean :checked

      t.timestamps null: false
    end
  end
end
