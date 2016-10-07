# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from mturk.models import Task
from django.views.decorators.csrf import csrf_exempt

# AMAZON_HOST = "https://workersandbox.mturk.com/mturk/externalSubmit"

@csrf_exempt
def index(request):
    print(request.POST.get("user-input",""))
    if (request.POST.get("user-input","") != ""):
        length = len(Task.objects.all())
        if (length > 0):
            if (request.POST.get("user-input","") != Task.objects.all()[length-1].result):
                Task.objects.create(result=request.POST.get("user-input",""))
        else:
            Task.objects.create(result=request.POST.get("user-input",""))
    db_rows = len(Task.objects.all())

    render_data = {
        "image_index": db_rows,
    }

    

    response = render_to_response("index.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response