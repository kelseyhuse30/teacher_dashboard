class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :description
      t.integer :type
      t.boolean :done

      t.timestamps
    end
  end
end
