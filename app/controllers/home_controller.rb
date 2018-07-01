class HomeController < ApplicationController
	before_action :authenticate_user!
	def index
		@all_patients = Patient.all
		@all_doctors = Doctor.all
		@all_appointments = Appointment.all
	end

	def create_patient
		patient_details = JSON.parse(params["patient_details"])
		create_new_patient = Patient.create(
			:name => patient_details["name"],
			:phone => patient_details["number"]
		)
	end

	def create_doctor
		doctor_details = JSON.parse(params["doctor_details"])
		create_new_doctor = Doctor.create(
			:name => doctor_details["name"],
			:phone => doctor_details["number"],
			:specialization => doctor_details["specialization"]
		)
	end

	def create_appointment
		appointment_details = JSON.parse(params["appointment_details"])
		create_new_appointment = Appointment.create(
			:doctor_name => appointment_details["doctor_name"],
			:patient_name => appointment_details["patient_name"],
			:disease => appointment_details["disease"]
		)
	end
	def show
		
	end
end
