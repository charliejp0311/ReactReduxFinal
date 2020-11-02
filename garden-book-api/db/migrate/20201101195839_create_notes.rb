class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.integer :plant_id
      t.integer :action_id
      t.string :note

      t.timestamps
    end
  end
end
