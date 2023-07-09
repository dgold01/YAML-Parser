from flask import Flask, jsonify
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)




from router import blueprint

app.register_blueprint(blueprint)



if __name__ == '__main__':
    app.run(debug=True)