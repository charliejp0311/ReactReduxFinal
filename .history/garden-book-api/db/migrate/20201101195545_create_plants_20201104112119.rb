class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :description
      t.integer :gardenbook_id
      t.boolean :growing

      t.timestamps
    end
  end
end
