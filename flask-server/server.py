from flask import Flask, request
import requests
import os

app = Flask(__name__)

@app.route("/members")
def members():
    return{"members": ["Member1", "Member2", "Member3"]}

# Replace these values with your own information
phone_number = '16262225919'
nexmo_api_key = '8a1430ec'
nexmo_api_secret = 'hmM3wc4WVlbZ5Hyw'

@app.route('/reminder', methods=['POST'])
def set_reminder():
    data = request.get_json()
    message = data['message']

    # Send the text message using the Nexmo API
    response = requests.post(f'https://rest.nexmo.com/sms/json',
        data={
            'api_key': nexmo_api_key,
            'api_secret': nexmo_api_secret,
            'from': '19252677598',
            'to': phone_number,
            'text': message
        }
    )

    # Check the response status code to see if the message was sent successfully
    if response.status_code == 200:
        return 'Reminder set and message sent successfully!'
    else:
        return 'Error sending message.'


if __name__ == "__main__":
    app.run(debug=True)