from flask import Blueprint
from flask import request
from controller import getYAMLFiles,getImageFile

# Creates a Blueprint object to allow us to define routes and their associated functions
blueprint = Blueprint('blueprint', __name__)


# Defines a route which allows the front end to receive a array of YAML data corresponding to YAML files
@blueprint.route('/files', methods=['GET'])
def getFiles():
    if request.method == 'GET':
         # Call the getYAMLFiles() function to retrieve YAML files and return them as a response
        return getYAMLFiles()

# Defines a route which allows the front end to receive binary data for a jpeg file by sending a post request and waits for the response.
@blueprint.route('/image', methods=['POST'])
def getImage():
    if request.method == 'POST':
        filename = request.json.get('filename')
        response = getImageFile(filename)
        return response


