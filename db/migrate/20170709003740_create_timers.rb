class CreateTimers < ActiveRecord::Migration[5.1]
  def change
    create_table :timers do |t|
      t.integer :time_left

      t.timestamps
    end
  end
end
