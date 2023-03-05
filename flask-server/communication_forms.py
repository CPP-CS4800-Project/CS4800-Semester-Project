# Download the helper library from https://www.twilio.com/docs/python/install
import constants
from twilio.rest import Client
# Set environment variables for your credentials
# Read more at http://twil.io/secure
def send_sms(phone_number, message_body):
    account_sid = constants.TWILIO_ACCOUNT_SID
    auth_token = constants.TWILIO_AUTH_TOKEN
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    body=message_body,
    from_="+18449971738",
    to=phone_number
    )
    print(message.sid)