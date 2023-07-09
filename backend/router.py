from flask import Blueprint
from flask import Flask
from flask import request
from controller import getYAMLFiles,getImageFile
from flask_cors import cross_origin
import logging
import sys
from flask import jsonify
from flask_cors import CORS

logging.basicConfig(level=logging.INFO, filename='app.log', filemode='w', format='%(asctime)s - %(levelname)s - %(message)s')

# Create a StreamHandler to log messages to the console
console_handler = logging.StreamHandler(sys.stdout)
console_handler.setLevel(logging.INFO)
console_formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
console_handler.setFormatter(console_formatter)

# Get the root logger and add the console handler
root_logger = logging.getLogger()
root_logger.addHandler(console_handler)


blueprint = Blueprint('blueprint', __name__)




@blueprint.route('/files', methods=['GET'])

def getFiles():
    
    if request.method == 'GET':
        return getYAMLFiles()



@blueprint.route('/image', methods=['POST'])
def getImage():
    if request.method == 'POST':
        logging.info('here')
        filename = request.json.get('filename')
        response = getImageFile(filename)
        return response


