import os



def findImage(filename):
    # Recursively traverses the directory tree starting from mock file system until no further sub-directories are available. 
    # At each directory os.walk() returns a three-tuple containing the current directory, a list of subdirectories(which we don't need)
    # and a folder of file names in the current directory 
    for root, dirs, files in os.walk('/Users/dannygold/Documents/GitHub/YAML-PARSER/backend/mock-filesystem'):  
        for file in files:
            # Here we need to find the file with a filename matching the argument. This is how we locate our image.
            if file == filename:
                # Constructs and returns the pull path of the file by combing its directory path with its filename. 
                return os.path.join(root, file)
    #  returns None if failed to locate file with specified file name           
    return None

def findYamlFile():
    yaml_files = []
    # Recursively traverses the directory tree starting from mock file system until no further sub-directories are available. 
    # At each directory os.walk() returns a three-tuple containing the current directory, a list of subdirectories(which we don't need)
    # and a folder of file names in the current directory 
    for root, dirs, files in os.walk('/Users/dannygold/Documents/GitHub/YAML-PARSER/backend/mock-filesystem'):
        for file in files:
            # We locate any YAML files here by checking to see if ends in .yaml or .yml. If so, we append its full path to the yaml_files array
            if file.endswith('.yaml') or file.endswith('.yml'):
                yaml_files.append(os.path.join(root, file))
    return yaml_files