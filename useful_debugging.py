'''
These are some useful python snippets for code debugging. I've used 
shitty variable names where I can because concision > verbosity with 
debug code.
'''

import requests as r


# DUMP ALL ARRIVAL FLIGHTS
url = "http://www.changiairport.com/cag-web/flights/arrivals?date=" + date + "&lang=en_US&callback=JSON_CALLBACK"
d_arrival = r.get(url).json()

# DUMP ALL DEPARTURE FLIGHTS
url = "http://www.changiairport.com/cag-web/flights/departures?date=" + date + "&lang=en_US&callback=JSON_CALLBACK"
d_departure = r.get(url).json()

# COMBINE DEPARTURE AND ARRIVAL FLIGHTS
d['carriers'] = d_departure['carriers'].extend(d_arrival['carriers']) # note this loses any info not contained in the 'carriers' array


# RETRIEVE ALL STATUS CODES
status_codes = set()
for x in d['carriers']: status_codes.add(x['status'])

# RETRIEVE ALL FLIGHTS WITH A POPULATED 'estimatedDate'
for x in d['carriers']:
	if x['estimatedDate'] != "": print(x); break