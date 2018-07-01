class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
    	t.string   :doctor_name
      	t.string   :patient_name
      	t.string   :disease
      t.timestamps
    end
  end
end
