# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
from mturk.models import Task

# AMAZON_HOST = "https://workersandbox.mturk.com/mturk/externalSubmit"
# AMAZON_HOST = "https://www.mturk.com/mturk/externalSubmit"

@csrf_exempt
def index(request):
    print(request)
    db_rows = Task.objects.all()
    if len(db_rows)==0:
        i = -1
    else: 
        i =len(db_rows)
    render_data = {
        "image_index": str(i+1),
    }
    if request.GET.get("image"):
        Task.objects.create(
            image = request.GET.get("image", ""),
            reject = request.GET.get("reject",""),
        )
    response = render_to_response("index.html", render_data)
    # without this header, your iFrame will not render in Amazon
    response['x-frame-options'] = 'this_can_be_anything'
    return response