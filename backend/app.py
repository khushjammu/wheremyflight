import requests as r
from flask import Flask, request, jsonify
import json
app = Flask(__name__)

@app.route("/", methods = ['GET'])
def hello():
    return "Hello World!"

def clean_data(item):
	for field in item:
		if item[field] == "":
			item[field] = "-"
	return item

def check_arrivals(date, flight_code):
	url = "http://www.changiairport.com/cag-web/flights/arrivals?date=" + date + "&lang=en_US&callback=JSON_CALLBACK"
	dumped_arrival_data = r.get(url).json()

	a = dumped_arrival_data
	
	correct_entry = {}

	for entry in a['carriers']:
		if entry['flightNo'] == flight_code or flight_code in [ i['flightNo'] for i in entry['slaves']]: correct_entry = entry

	correct_entry = clean_data(correct_entry)
	return correct_entry

def check_departures(date, flight_code):
	url = "http://www.changiairport.com/cag-web/flights/departures?date=" + date + "&lang=en_US&callback=JSON_CALLBACK"
	dumped_departures_data = r.get(url).json()

	a = dumped_departures_data
	
	correct_entry = {}

	for entry in a['carriers']:
		if entry['flightNo'] == flight_code or flight_code in [ i['flightNo'] for i in entry['slaves']]: correct_entry = entry

	correct_entry = clean_data(correct_entry)
	return correct_entry

def check_entries(date, flight_code):
	arrivals_status = check_arrivals(date, flight_code)
	departures_status = check_departures(date, flight_code)
	return_data = {}

	if arrivals_status and departures_status:
		return_data['direction'] = 'both'
		return_data['arrival'] = arrivals_status
		return_data['departure'] = departures_status
	elif arrivals_status:
		return_data['direction']= 'arrival'
		return_data['arrival'] = arrivals_status
	elif departures_status:
		return_data['direction']= 'departure'
		return_data['departure'] = departures_status

	return return_data

@app.route("/get_flights", methods = ['GET'])
def get_flights():
	date = request.args.get('date') # in the form YYYYMMDD e.g. 20181102
	flight_code = request.args.get('flight_code') # eg. LX4175

	correct_entry = check_entries(date, flight_code)

	if bool(correct_entry):
		response = {
			'status': 'success',
			'data': correct_entry 
		}
	else: 
		response = {
			'status': 'error',
			'status_title': 'No flights found',
			'status_message': 'Flight not found. Please double-check flight code and date. '
		}

	return jsonify(response)

if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug = True)
