class CreateAddResultToCards < ActiveRecord::Migration[6.0]
  def change
    create_table :add_result_to_cards do |t|
      t.string :result

      t.timestamps
    end
  end
end
