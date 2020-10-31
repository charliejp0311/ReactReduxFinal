class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :type
      t.string :note
      t.integer :plantId
      t.integer :harvestedPlantId
      t.integer :gardenId
      t.integer :harvestId

      t.timestamps
    end
  end
end
