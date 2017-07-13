class CreateTimers < ActiveRecord::Migration[5.1]
  def change
    create_table :timers do |t|
      t.integer :time_remaining, default: 0
      t.boolean :form_open, default: true

      t.timestamps
    end
  end
end
