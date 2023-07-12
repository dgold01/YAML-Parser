from flask import jsonify, Flask, send_file,Markup
from fileFinder import findYamlFile, findImage
from MarkdownYAMLParser import parseFiles,processMardown

# Returns YAML data as a JSON response 
def getYAMLFiles():
    # Gets array of file paths for YAML files
    yaml_files = findYamlFile()
    #Parses the YAML files and returns the data
    yaml_data = parseFiles(yaml_files)
    # Process any Markdown syntax and returns YAML data with HTML tags
    yaml_data = processMardown(yaml_data)
    return jsonify(yaml_data)


def getImageFile(filename):
 
    try:
        # gets the image file path based on the filename argument
        imagePath = findImage(filename) 
        # if image file is found, the file content is streamed as binary data directly to client in the response body. 
        # Setting mimetype to 'image.jpeg' should let the client know how to handle the binary content. 
        if imagePath:
            return send_file(imagePath, mimetype='image.jpeg')
        else:
            # Return a 404 error if the image file is not found
            return 'Image not found', 404
    except FileExistsError:
        # Return a 404 error if there's an error finding the image
        return 'Image not found',404





