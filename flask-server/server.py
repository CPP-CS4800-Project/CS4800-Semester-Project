import os
from flask import Flask, request
from meteostat import Stations, Daily

app = Flask(__name__)

# Your Nexmo API credentials
API_KEY = os.environ.get('NEXMO_API_KEY')
API_SECRET = os.environ.get('NEXMO_API_SECRET')
FROM_NUMBER = os.environ.get('NEXMO_PHONE_NUMBER')
TO_NUMBER = os.environ.get('YOUR_PHONE_NUMBER')

@app.route('/weather', methods=['POST'])
def send_weather_message():
    # Get the weather for the specified location
    location = request.form['location']
    stations = Stations().search(location)
    if len(stations) > 0:
        station = stations.fetch(1)
        weather = Daily(station.id, start='2021-01-01', end='2021-01-02').fetch()
        message = f"The weather in {location} today: {weather['temp'].mean()}°C"
    else:
        message = "No weather data available for the specified location."
    
    # Send the message using the Nexmo API
    import nexmo
    client = nexmo.Client(key=API_KEY, secret=API_SECRET)
    response = client.send_message({
        'from': FROM_NUMBER,
        'to': TO_NUMBER,
        'text': message
    })

    # Return a response message
    if response['messages'][0]['status'] == '0':
        return "Weather message sent successfully!"
    else:
        return f"Error sending weather message: {response['messages'][0]['error-text']}"



if __name__ == "__main__":
    app.run(debug=True)