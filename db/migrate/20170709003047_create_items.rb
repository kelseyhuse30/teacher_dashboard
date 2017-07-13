class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :description
      t.string :item_type
      t.boolean :done, default: false
      t.boolean :open, default: false

      t.timestamps
    end
  end
end
