class CreatePlayerRecords < ActiveRecord::Migration[7.1]
  def change
    create_table :player_records do |t|
      t.string :name
      t.integer :minutes
      t.integer :seconds

      t.timestamps
    end
  end
end
