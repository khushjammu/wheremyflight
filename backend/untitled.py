import requests as r

depart_url = "http://www.changiairport.com/cag-web/flights/departures?date=20181218&lang=en_US&callback=JSON_CALLBACK"
arrival_url = "http://www.changiairport.com/cag-web/flights/arrivals?date=20181218&lang=en_US&callback=JSON_CALLBACK"


dumped_arrival_data = r.get(arrival_url).json()

dumped_departure_data = r.get(depart_url).json()

for x in dumped_arrival_data['carriers']:
	for y in dumped_departure_data['carriers']:
		if x['flightNo'] == y['flightNo']:
			print(x['flightNo'])