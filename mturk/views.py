# from django.shortcuts import render

# Create your views here.
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import json
import subprocess
# import shlex
import ast

@csrf_exempt
def index(request):
    print("reach")
    # c_line = 'curl -H "Content-Type: application/json" -d '{"key1":"v", "key2":"e", "key3":"t"}' https://wix5uh8vve.execute-api.us-west-2.amazonaws.com/prod/clueless/get-profile-by-id ; echo'
    # commands = ['curl', '-H', 'Content-Type: application/json', '-d', '{"key1":"v", "key2":"e", "key3":"t"}', 'https://wix5uh8vve.execute-api.us-west-2.amazonaws.com/prod/clueless/get-profile-by-id', ';', 'echo']
    # commands = ['curl', '-H', 'Content-Type: application/json', '-d', str(json.dumps(a)), 'https://wix5uh8vve.execute-api.us-west-2.amazonaws.com/prod/clueless/getoutfitimagesbykeyword', ';', 'echo']
    # p = subprocess.Popen(commands, stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    # out, err = p.communicate()
    # print(out)
    # print(err)
    # print(dict(request.POST))
    if (request.GET.get('userId','') != ''):
        return display(request)
    print("index")
    render_data = {}
    response = render_to_response("index.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response

@csrf_exempt
def display(request):
    print("display")
    commands = ['curl', '-H', 'Content-Type: application/json', '-d', '{"key1":"v", "key2":"e", "key3":"t"}', 'https://wix5uh8vve.execute-api.us-west-2.amazonaws.com/prod/clueless/get-profile-by-id']
    # commands = ['curl', '-H', 'Content-Type: application/json', '-d', json.dumps(a), 'https://wix5uh8vve.execute-api.us-west-2.amazonaws.com/prod/clueless/getoutfitimagesbykeyword']
    p = subprocess.Popen(commands, stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    out, err = p.communicate()
    print(out)
    render_data = {
        "age": age,
        "skin_tone": skin_tone,
        "body_type": body_type,
    }
    response = render_to_response("display.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response