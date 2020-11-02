class CreateGardenbooks < ActiveRecord::Migration[6.0]
  def change
    create_table :gardenbooks do |t|

      t.timestamps
    end
  end
end
