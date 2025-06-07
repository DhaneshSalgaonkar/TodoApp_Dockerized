from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print('Received data:', data)
    return jsonify({"message": "Data processed successfully!", "data": data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
