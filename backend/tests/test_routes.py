import sys
sys.path.append('/Users/dannygold/Documents/GitHub/YAML-Parser/backend')
import pytest
from server import app
import json
import os

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

#Test get files route
def test_get_files_route(client):
     response = client.get('/files') 
     assert response.status_code == 200
     data = json.loads(response.data) 
     assert  data == {"text":"<h1>Hello</h1>\n<p>There are several steps that you can take at home in the days and weeks before your\noperation to help ensure a smooth and pleasant return from hospital.\nPreparing your mind, body and home for your recovery are just a few key steps to\nhelp you get ready for your upcoming surgery.\nThe information, notifications and checklists here in the app will help guide your\npreparations - such as stocking up on food, removing trip hazards, putting things\nwithin easy reach and generally planning ahead for the first days and weeks with your\nnew hip.\n<strong>If you are feeling unwell, or if there is any reason you think you might not be\nable to go ahead with the operation, please get in touch with your clinical team as\nsoon as you can.</strong></p>","title":"<p>The week before surgery</p>"}

def test_get_image_route(client):
    # Prepare the request
    image_filename = 'test-image.jpeg'
    image_path = '/Users/dannygold/Documents/GitHub/YAML-Parser/backend/mock-filesystem/folder3/test-image.jpeg'
    with open(image_path, 'rb') as image_file:
        data = {'image': (image_file, image_filename)}
        response = client.post('/image', data=data, content_type='multipart/form-data')

    # Verify the response
    assert response.status_code == 200
    assert response.mimetype == 'image/jpeg'  # Assuming the returned file is a JPEG image

    expected_image_data = image_file.read()
    assert response.data == expected_image_data