# app.py

from flask import Flask, jsonify

app = Flask(__name__)

# Define a route for the root endpoint
@app.route('/')
def hello():
    return jsonify(message='Hello from the Flask API!')

# Define additional routes as needed
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'value': 42}
    return jsonify(data)

if __name__ == '__main__':
    # Run the Flask app when the script is executed
    app.run(host='0.0.0.0', port=5000)