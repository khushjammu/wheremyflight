import requests as r
from flask import Flask, request, jsonify
import json
app = Flask(__name__)

@app.route("/", methods = ['GET'])
def hello():
    return "Hello World!"

@app.route("/get_flights", methods = ['GET'])
def get_flights():
	date = request.args.get('date') # in the form YYYYMMDD e.g. 20181102
	flight_code = request.args.get('flight_code') # eg. LX4175

	url = "http://www.changiairport.com/cag-web/flights/arrivals?date=" + date + "&lang=en_US&callback=JSON_CALLBACK"
	dumped_flight_data = r.get(url).json()

	a = dumped_flight_data
	correct_entry = {}

	for entry in a['carriers']:
		if entry['flightNo'] == flight_code or flight_code in [ i['flightNo'] for i in entry['slaves']]: correct_entry = entry



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
