from flask import Blueprint
from flask import request
from controller import getYAMLFiles
from flask_cors import cross_origin

blueprint = Blueprint('blueprint', __name__)


@cross_origin()
@blueprint.route('/files', methods=['GET'])
def getFiles():
    if request.method == 'GET':
        return getYAMLFiles()