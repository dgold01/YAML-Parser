from flask import jsonify, Flask, send_file
import os
import yaml
import markdown


def getYAMLFiles():
    yaml_files = findYamlFile()
    yaml_data = parseFiles(yaml_files)
    yaml_data = processMardown(yaml_data)
    return jsonify(yaml_data)


def getImageFile(filename):
 
    try:
    
        imagePath = findImage(filename) 
    
        if imagePath:
            return send_file(imagePath, mimetype='image.jpeg')
        else:
            return 'Image not found', 404
    except FileExistsError:
        return 'Image not found',404



def findImage(filename):
    for root, dirs, files in os.walk('/Users/dannygold/Documents/GitHub/YAML-PARSER/backend/mock-filesystem'):
        for file in files:
            if file == filename:
                return os.path.join(root, file)
    return None

def findYamlFile():
    yaml_files = []
    for root, dirs, files in os.walk('/Users/dannygold/Documents/GitHub/YAML-PARSER/backend/mock-filesystem'):
        for file in files:
            if file.endswith('.yaml') or file.endswith('.yml'):
                yaml_files.append(os.path.join(root, file))

  
    return yaml_files


def parseFiles(yaml_files):
    yaml_data = []
    for file_path in yaml_files:
        with open(file_path, 'r') as file:
            data = yaml.safe_load(file)
            yaml_data.append(data)
    return yaml_data

def processMardown(yaml_data):
    #   for item in yaml_data:
    #     for key, value in item.items():
    #         if isinstance(value, str):
    #             # Process the markdown syntax
    #             print(value)
    #             formatted_text = markdown.markdown(value)
                
    #             # Update the YAML data with the formatted text
    #             item[key] = formatted_text


        return yaml_data