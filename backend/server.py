from flask import Flask
from router import blueprint
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.register_blueprint(blueprint)
if __name__ == '__main__':
    app.run()
