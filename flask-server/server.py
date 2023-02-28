from datetime import datetime, timedelta
from flask import Flask, request
from twilio.rest import Client

app = Flask(__name__)

@app.route("/members")
def members():
    return{"members": ["Member1", "Member2", "Member3"]}


# Twilio account credentials
account_sid = 'your_account_sid'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

@app.route('/set_reminder', methods=['GET','POST'])
def set_reminder():
    phone_number = request.form['phone_number']
    message = request.form['message']
    remind_at = request.form['remind_at']
    
    # Convert remind_at to datetime object
    remind_time = datetime.strptime(remind_at, '%Y-%m-%d %H:%M:%S')
    
    # Calculate delay until remind time
    delay = (remind_time - datetime.now()).total_seconds()
    
    # Schedule the message using Twilio API
    message = client.messages.create(
        body=message,
        from_='your_twilio_number',
        to=phone_number,
        send_at=datetime.now() + timedelta(seconds=delay)
    )
    
    return f'Reminder set for {remind_at} to {phone_number} with message ID: {message.sid}'

if __name__ == "__main__":
    app.run(debug=True)


# import threading
# from datetime import datetime, timedelta
# from flask import Flask, request
# import requests

# app = Flask(__name__)

# @app.route('/set_reminder', methods=['GET', 'POST'])
# def set_reminder():
#     phone_number = request.form['phone_number']
#     message = request.form['message']
#     remind_at = request.form['remind_at']

#     # Convert remind_at to datetime object
#     remind_time = datetime.strptime(remind_at, '%Y-%m-%d %H:%M:%S')
    
#     # Calculate delay until remind time
#     delay = (remind_time - datetime.now()).total_seconds()

#     # Schedule the reminder using threading.Timer
#     def send_message():
#         url = f'https://api.smsbroadcast.com.au/api-adv.php?' \
#               f'action=sendsms&user=username&password=password&to={phone_number}&from=Sender&message={message}'
#         response = requests.get(url)
#         print(response.text)  # Print response for debugging

#     threading.Timer(delay, send_message).start()

#     return f'Reminder set for {remind_at} to {phone_number}'

# if __name__ == '__main__':
#     app.run(debug=True)
