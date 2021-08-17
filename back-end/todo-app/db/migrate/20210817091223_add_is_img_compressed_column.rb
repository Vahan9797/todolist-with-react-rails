class AddIsImgCompressedColumn < ActiveRecord::Migration
  def change
    add_column :api_todos, :img_is_compressed, :boolean, required: false
  end
end
