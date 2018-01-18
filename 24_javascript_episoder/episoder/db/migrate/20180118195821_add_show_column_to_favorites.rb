class AddShowColumnToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_column :favorites, :show, :string 
  end
end
