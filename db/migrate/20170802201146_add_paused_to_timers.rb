class AddPausedToTimers < ActiveRecord::Migration[5.1]
  def change
    add_column :timers, :paused, :boolean, default: false
  end
end
