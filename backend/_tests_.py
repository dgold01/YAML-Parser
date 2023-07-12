import pytest
from MarkdownYAMLParser import parseFiles,processMardown
from fileFinder import findYamlFile



def test_FindAndParseYAMLFiles():
    yaml_files = findYamlFile()
    yaml_data = parseFiles(yaml_files)
    assert yaml_data == [{'text': "Tomorrow is the day of your surgery. Give yourself plenty of time to travel to the\nhospital and make sure you have everything you need with you - you will find a\nchecklist here in the app with suggestions on what to bring.<br>\n\nIn general:<br>\n- Remember to follow the fasting instructions from your team. Having an empty\nstomach reduces the risk of vomiting while under sedation or general anaesthetic,\nwhich can cause severe complications if vomit passes into the lungs<br>\n- Follow any pre-surgery washing instructions, or if not provided, shower normally\n  including washing your hair<br>\n- Do you have everything you need?<br>\n- Double-check where and when to arrive and how you will get there<br>\n- Drink plenty of fluids today so you are well hydrated for surgery<br>\n\n\n  Picture yourself fully recovered and try to get a good night's sleep.<br>\n  *You can find the full article on the **Info** tab under 'Having your procedure'.*<br>\n", 'title': 'The day before surgery'}, {'imageFileName': 'test-image.jpeg', 'title': 'Test Image'}, {'text': '# Hello \n\nThere are several steps that you can take at home in the days and weeks before your\noperation to help ensure a smooth and pleasant return from hospital.\nPreparing your mind, body and home for your recovery are just a few key steps to\nhelp you get ready for your upcoming surgery.\nThe information, notifications and checklists here in the app will help guide your\npreparations - such as stocking up on food, removing trip hazards, putting things\nwithin easy reach and generally planning ahead for the first days and weeks with your\nnew hip.\n**If you are feeling unwell, or if there is any reason you think you might not be\nable to go ahead with the operation, please get in touch with your clinical team as\nsoon as you can.**', 'title': 'The week before surgery'}] 

def test_ParseMarkdown():
    yaml_files = findYamlFile()
    yaml_data = parseFiles(yaml_files)
    yaml_data = processMardown(yaml_data)
    assert yaml_data == [{'text': u"<p>Tomorrow is the day of your surgery. Give yourself plenty of time to travel to the\nhospital and make sure you have everything you need with you - you will find a\nchecklist here in the app with suggestions on what to bring.<br></p>\n<p>In general:<br>\n- Remember to follow the fasting instructions from your team. Having an empty\nstomach reduces the risk of vomiting while under sedation or general anaesthetic,\nwhich can cause severe complications if vomit passes into the lungs<br>\n- Follow any pre-surgery washing instructions, or if not provided, shower normally\n  including washing your hair<br>\n- Do you have everything you need?<br>\n- Double-check where and when to arrive and how you will get there<br>\n- Drink plenty of fluids today so you are well hydrated for surgery<br></p>\n<p>Picture yourself fully recovered and try to get a good night's sleep.<br>\n  <em>You can find the full article on the <strong>Info</strong> tab under 'Having your procedure'.</em><br></p>", 'title': u'<p>The day before surgery</p>'}, {'imageFileName': 'test-image.jpeg', 'title': u'<p>Test Image</p>'}, {'text': u'<h1>Hello</h1>\n<p>There are several steps that you can take at home in the days and weeks before your\noperation to help ensure a smooth and pleasant return from hospital.\nPreparing your mind, body and home for your recovery are just a few key steps to\nhelp you get ready for your upcoming surgery.\nThe information, notifications and checklists here in the app will help guide your\npreparations - such as stocking up on food, removing trip hazards, putting things\nwithin easy reach and generally planning ahead for the first days and weeks with your\nnew hip.\n<strong>If you are feeling unwell, or if there is any reason you think you might not be\nable to go ahead with the operation, please get in touch with your clinical team as\nsoon as you can.</strong></p>', 'title': u'<p>The week before surgery</p>'}]



# test routes

