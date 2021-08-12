class ChangeTodosCheckedDefaultValue < ActiveRecord::Migration
  def change
    change_column_default :api_todos, :checked, false
  end
end
