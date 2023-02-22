from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/Food')
def food():
    return 'I LOVE WINGS!'

@app.route('/MI')
def mi():
    return 'this is for a3'

@app.route('/JREB')
def jreb():
    return 'Jrebollar\'s a3pt3'

app.run(host='0.0.0.0', port=81)
