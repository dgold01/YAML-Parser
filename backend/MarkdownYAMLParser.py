import yaml
import markdown


def parseFiles(file_paths):
    yaml_array = []
     # Loops through each file path
    for file_path in file_paths: 
         # Open the YAML file in read mode
        with open(file_path, 'r') as file: 
            # Reads the file and converts YAML data into Python object 
            data = yaml.safe_load(file)  
            # Python object appended to array of YAML python objects
            yaml_array.append(data)
    return yaml_array

def processMardown(yaml_array):
    for yaml_object in yaml_array: 
        # Iterate over key-value pairs in each yaml object
        for key, value in yaml_object.items(): 
            # I don't want to add html syntax to the file name for aimage. At the moment the key in my mock image YAML file is 'imageFileName'
            if key != "imageFileName":   
                 # Ensures markdown support is only applied to string data types in the YAML file 
                if isinstance(value, str): 
                    # Converts any markdown syntax into HTML tags, so that it can be read by frontend
                    formatted_text = markdown.markdown(value) 
                     #Updates each key in the yaml_object with new formatted text
                    yaml_object[key] = formatted_text
    return yaml_object