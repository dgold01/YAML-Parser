from flask import jsonify
import os
import yaml


def getYAMLFiles():
    yaml_files = findYamlFile()
    yaml_data = parseFiles(yaml_files)
    return jsonify(yaml_data)


def findYamlFile():
    yaml_files = []
    for root, dirs, files in os.walk('/Users/dannygold/Documents/GitHub/electron-app/backend/mock-filesystem'):
        for file in files:
            if file.endswith('.yaml') or file.endswith('.yml'):
                yaml_files.append(os.path.join(root, file))
                print(yaml_files)

    return yaml_files


def parseFiles(yaml_files):
    yaml_data = []
    for file_path in yaml_files:
        with open(file_path, 'r') as file:
            data = yaml.safe_load(file)
            yaml_data.append(data)

    return yaml_data
