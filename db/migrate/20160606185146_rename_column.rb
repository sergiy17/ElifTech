class RenameColumn < ActiveRecord::Migration
  def change
  	rename_column :companies, :ernings, :earnings
  end
end
